import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <script src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.9.5/tarteaucitron.min.js"></script>
          <link rel="icon" href="/MariusIA-logo-monogram.png" />
        </Head>
        <body className="antialiased bg-transparent text-text" style={{ fontFamily: 'Work Sans, sans-serif' }}>
          <Main />
          <NextScript />
          <script src="/js/cookies.js"></script>
        </body>
      </Html>
    );
  }
}