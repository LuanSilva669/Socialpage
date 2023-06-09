import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link rel="icon" href="/hlogo.png" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
