import React from "react";
import { Layout } from "../components/layout";
import { graphql, Link, useStaticQuery } from "gatsby";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { H1, H2 } from "../styled-components/styled-headers";
import { Column, Row } from "../styled-components/styled-grid";
import { Card, CardContainer } from "../styled-components/styled-card";
import styled from "styled-components";
import { TertiaryText } from "../styled-components/styled-span";

const Tag = styled(Column)`
  /* width: 7.5vw; */
  height: 2.5vw;
  background: ${(props) => props.theme["background"]["foregroundElements"]};
  border: 0;
  border-radius: 2vw;
  padding: 0 0.3vw;
  margin: 0 1vw;
  text-align: center;
`;

// const query = graphql`
//   {
//     allMdx {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `;

const query = graphql`
  {
    mdx(id: { eq: "1" }) {
      id
      body
    }
  }
`;

const BlogsPage = () => {
  const postQueryResults = useStaticQuery(query);
  const posts =
    postQueryResults.length > 1
      ? postQueryResults["allMdx"]["edges"].map(
          (e: any) => e["node"]["frontmatter"]
        )
      : [];

  return (
    <Layout>
      <main style={{ height: "50vh", paddingTop: "15vh" }}>
        <title>Blog</title>
        <H1>Coming soon!</H1>
        <StyledSection>
          <Row container center>
            {posts.map((p: any) => {
              return (
                <Link to={"/blog" + p["path"]} key={p["title"]}>
                  <CardContainer>
                    <Card
                      style={{
                        width: "80vw",
                        height: "16vw",
                        transform: "none",
                      }}
                    >
                      <Row>
                        <H2 style={{ padding: "0", margin: "1vh 0" }}>
                          {p["title"]}
                        </H2>
                      </Row>
                      <Row>{p["date"]}</Row>
                      <Row center>
                        {p["tags"].map((t: string) => (
                          <Tag key={t}>
                            <TertiaryText>{t}</TertiaryText>
                          </Tag>
                        ))}
                      </Row>
                    </Card>
                  </CardContainer>
                </Link>
              );
            })}
          </Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default BlogsPage;
