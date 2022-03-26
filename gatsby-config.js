/** @type {import('gatsby').GatsbyConfig} */

website = require("./website.ts");
const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix;

module.exports = {
  siteMetadata: {
    title: website.title,
    siteUrl: website.url + pathPrefix,
    pathPrefix,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: "/" + website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    author: website.author,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Resume",
        link: "/resume",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        // start_url: pathPrefix,
        display: "standalone",
        icon: website.favicon,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
    // `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/images/`,
        },
      },
    },
    "gatsby-plugin-react-svg",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-netlify",
  ],
};
