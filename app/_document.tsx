import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="/MariusIA-logo-monogram.png" />
        </Head>
        <body className="antialiased bg-transparent text-text" style={{ fontFamily: 'Work Sans, sans-serif' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}