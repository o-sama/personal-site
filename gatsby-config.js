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
        name: "Bio",
        link: "/bio",
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
    {
      resolve: "gatsby-plugin-sitemap",
      createLinkInHead: true,
      query: `
        {
          wp {
            generalSettings {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
      }`,
      resolveSiteUrl: ({ site, allSitePage }) => {
        return site.wp.generalSettings.siteUrl;
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map((node) => {
          return {
            url: `${site.wp.generalSettings.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          };
        }),
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: "/",
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
        path: "./src/content/posts/images/",
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/blogPost.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.example.com",
        sitemap: "https://www.example.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
