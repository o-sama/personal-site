import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "./header";
import Timeline from "./timeline";
import { useTheme } from "styled-components";
import Footer from "./footer";
import Delayed from "./delayed";
import SEO from "./SEO";

export const Layout = ({
  children,
  headers,
}: {
  children: any;
  headers?: string[];
}) => {
  const theme = useTheme();
  const Tl = headers ? (
    <Delayed>
      <Timeline headers={headers} />
    </Delayed>
  ) : null;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          style={{
            minHeight: "100vh",
            maxWidth: "100vw",
            display: "flex",
            flexDirection: "column",
            background: `${theme["background"]["primary"]}`,
          }}
        >
          <Helmet title={data.site.siteMetadata.title} />
          <Helmet
            htmlAttributes={{
              lang: "en",
            }}
          />
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no viewport-fit=cover"
              data-react-helmet="true"
            />
          </Helmet>
          <SEO />
          <Helmet>
            <meta
              name="google-site-verification"
              content="Fp_UoougSu4XBQxBALBcdVoXDZ02MyZXuVLiyjLs7x0"
            />
          </Helmet>
          <Header
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          {Tl}

          <div
            style={{
              paddingTop: "5vh",
              background: `${theme["background"]["primary"]}`,
            }}
          >
            {children}
          </div>
          <Footer />
        </div>
      )}
    />
  );
};
