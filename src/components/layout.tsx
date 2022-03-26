import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "./header";
import Timeline from "./timeline";
import { useTheme } from "styled-components";
import Footer from "./footer";
import Delayed from "./delayed";
import { light } from "../styled-components/themes";
import SEO from "./SEO";

export const Layout = ({
  children,
  headers,
}: {
  children: any;
  headers?: string[];
}) => {
  const theme = useTheme() as typeof light;
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
            display: "flex",
            flexDirection: "column",
            background: `${theme.mainBackground}`,
          }}
        >
          <Helmet title={data.site.siteMetadata.title} />
          <Helmet
            htmlAttributes={{
              lang: "en",
            }}
          />
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
              background: `${theme.mainBackground}`,
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
