const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const NOTION_KEY = process.env.NOTION_KEY;
const NOTION_DB = process.env.NOTION_DB || '306d314b3ef080d58c4ec5bd85683d73';

const notion = {
  baseUrl: 'https://api.notion.com/v1',
  headers: {
    'Authorization': `Bearer ${NOTION_KEY}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28'
  }
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (!url || !url.startsWith('http')) {
      resolve(null);
      return;
    }

    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        resolve(null);
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      resolve(null);
    });
  });
}

async function getImageUrls() {
  if (!NOTION_KEY) {
    console.log('No NOTION_KEY, skipping image download');
    return [];
  }

  try {
    const query = { page_size: 100 };
    const response = await fetch(`${notion.baseUrl}/databases/${NOTION_DB}/query`, {
      method: 'POST',
      headers: notion.headers,
      body: JSON.stringify(query)
    });

    if (!response.ok) return [];
    
    const data = await response.json();
    if (!data.results) return [];

    const urls = [];
    
    for (const page of data) {
      const props = page.properties;
      const slug = props.Slug?.rich_text?.[0]?.plain_text || props.Titre?.title?.[0]?.plain_text || '';
      
      if (!slug) continue;

      const getImageUrl = (prop) => {
        if (!prop) return '';
        if (prop.url) return prop.url;
        if (prop.files && prop.files.length > 0) {
          const file = prop.files[0];
          if (file.file) return file.file.url;
          if (file.external) return file.external.url;
        }
        return '';
      };

      const imageUrl = getImageUrl(props.Image) || getImageUrl(props.Media);
      if (imageUrl) {
        const ext = path.extname(new URL(imageUrl).pathname) || '.jpg';
        urls.push({ url: imageUrl, slug, ext });
      }
    }

    return urls;
  } catch (error) {
    console.error('Error fetching Notion data:', error);
    return [];
  }
}

async function main() {
  console.log('Downloading Notion images...');
  
  const publicDir = path.join(process.cwd(), 'public', 'articles');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const imageUrls = await getImageUrls();
  
  for (const { url, slug, ext } of imageUrls) {
    const filename = `${slug}${ext}`;
    const filepath = path.join(publicDir, filename);
    
    if (fs.existsSync(filepath)) {
      console.log(`Already exists: ${filename}`);
      continue;
    }

    await downloadImage(url, filepath);
  }

  console.log('Done downloading images');
}

main();
