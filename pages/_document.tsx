import { NextSeo } from "next-seo";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta title="Aayush Mohan - Frontend Web Developer" content="" />
          <meta
            name="description"
            content="I am Aayush Mohan, a frontend web developer who specializes in creating responsive and user-friendly websites. View my portfolio to see examples of my work and contact me to discuss your project."
          />
          <meta
            name="keywords"
            content="Aayush Mohan, frontend web developer, portfolio, responsive design, user experience, HTML, CSS, SCSS, Tailwind CSS, JavaScript, jQuery, Bootstrap, React, NEXT JS, Typescript, Sanity, WIX, WebFlow, web development, web design"
          />
          <meta name="author" content="Aayush Mohan" />
          <link rel="canonical" href="https://aayushmohan.dev/" />
          <meta
            property="og:title"
            content="Aayush Mohan - Frontend Web Developer"
          />
          <meta
            property="og:description"
            content="I am Aayush Mohan, a frontend web developer who specializes in creating responsive and user-friendly websites. View my portfolio to see examples of my work and contact me to discuss your project."
          />
          <meta
            property="og:image"
            content="https://cdn.sanity.io/images/p31j23cd/production/8dcafc21a93b50e65c1fb73d9ec35aed125819d8-5472x3648.jpg"
          />
          <meta property="og:url" content="https://aayushmohan.dev/" />
          <meta
            name="twitter:title"
            content="Aayush Mohan - Frontend Web Developer"
          />
          <meta
            name="twitter:description"
            content="I am Aayush Mohan, a frontend web developer who specializes in creating responsive and user-friendly websites. View my portfolio to see examples of my work and contact me to discuss your project."
          />
          <meta
            name="twitter:image"
            content="https://pbs.twimg.com/profile_images/1478391593803603980/ClAdD_qV_400x400.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />

          {/* NEXT SEO */}

          <NextSeo
            title="Aayush Mohan"
            description="Aayush Mohan a Frontend Web Developer"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,700;1,500;1,600&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=The+Nautigal&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
