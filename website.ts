module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Osama Faqhruldin's site", // Navigation and Site Title
  titleAlt: "o-sama", // Title for JSONLD
  description:
    "A website to get to know me. I'm a software Engineer who specializes in Site Reliability.",
  headline: "Osama Faqhruldin's personal site", // Headline for schema.org JSONLD
  url: "https://o-sama.netlify.app", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "src/images/logolight.svg", // Used for SEO

  // JSONLD / Manifest
  favicon: "src/images/icon.png",
  shortName: "o-sama", // shortname for manifest. MUST be shorter than 12 characters
  author: "Osama Faqhruldin", // Author for schemaORGJSONLD

  //   googleAnalyticsID: "UA-47519312-7",
};
