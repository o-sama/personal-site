import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "./header";
import Timeline from "./timeline";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import Footer from "./footer";
import Delayed from "./delayed";

export const Layout = ({
  children,
  headers,
}: {
  children: any;
  headers?: string[];
}) => {
  const theme = useContext(ThemeContext);
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
          <Helmet
            title={"title"}
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" },
            ]}
          ></Helmet>
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
