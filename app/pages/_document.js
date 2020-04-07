// add compatibility to material ui by customizing document to strip next from rendering default styles
// A custom Document is commonly used to augment your application's <html> and <body> tags.
// This is necessary because Next.js pages skip the definition of the surrounding document's markup.
import Document, { Html, Head, Main, NextScript } from "next/document"; // required for the page to be properly rendered.
import React from "react";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../src/theme";

// To override the default Document
// Document is only rendered in the server, event handlers will not work in the component
export default class MyDocument extends Document {
  // Document's getInitialProps function is not called during client-side transitions, nor when a page is statically optimized
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          {/* components outside of <Main /> will not be initialized by the browser. Do not add application logic */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// expressing asynchronous server-rendering data requirements.
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      // useful for wrapping the whole react tree
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
