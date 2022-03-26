import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

interface Props {
  title?: string;
  desc?: string;
  banner?: string;
  pathname?: string;
  article?: boolean;
  node?: {
    first_publication_date: string;
    last_publication_date: string;
  };
}

const SEO: React.FC<Props> = ({
  title,
  desc,
  banner,
  pathname,
  article,
  node,
}) => {
  const { site } = useStaticQuery(query);

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      author,
    },
  } = site;

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ""}`,
  };

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      "@type": "Person",
      name: author,
      sameAs: [
        "https://www.linkedin.com/in/osamafaqhruldin/",
        "https://github.com/o-sama",
      ],
    },
    copyrightHolder: {
      "@type": "Person",
      name: author,
      sameAs: [
        "https://www.linkedin.com/in/osamafaqhruldin/",
        "https://github.com/o-sama",
      ],
    },
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: author,
      sameAs: [
        "https://www.linkedin.com/in/osamafaqhruldin/",
        "https://github.com/o-sama",
      ],
    },
    publisher: {
      "@type": "Person",
      name: author,
      sameAs: [
        "https://www.linkedin.com/in/osamafaqhruldin/",
        "https://github.com/o-sama",
      ],
    },
    datePublished: "2022-03-25T10:30:00+04:00",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${defaultBanner}`,
    },
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      "@type": "ListItem",
      item: {
        "@id": siteUrl,
        name: "Homepage",
      },
      position: 1,
    },
  ];

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: author,
      },
      copyrightHolder: {
        "@type": "Person",
        name: author,
      },
      copyrightYear: "2022",
      creator: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: author,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${defaultBanner}`,
        },
      },
      datePublished: node?.first_publication_date,
      dateModified: node?.last_publication_date,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    };
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      "@type": "ListItem",
      item: {
        "@id": seo.url,
        name: seo.title,
      },
      position: 2,
    });
  }

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
  };

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
    </>
  );
};

export default SEO;

SEO.defaultProps = {
  title: "",
  desc: "",
  banner: "",
  pathname: "",
  article: false,
  node: { first_publication_date: "", last_publication_date: "" },
};

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        headline
        siteLanguage
        author
      }
    }
  }
`;
