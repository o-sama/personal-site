import React from "react";
import { Layout } from "./layout";
import { StyledSection } from "../styled-components/styled-section";
import { Column, Row } from "../styled-components/styled-grid";
import { H1, H2, H3 } from "../styled-components/styled-headers";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import styled from "styled-components";

const ThematicBreak = styled.hr`
  height: 1vh;
  border: none;
  background: none;
`;

const Break = styled.hr`
  width: 80vw;
  border-style: solid;
  border-top-style: hidden;
  border-color: ${(props) => props.theme["nav"]["border"]};
`;

const comps = {
  h1: H1,
  h2: H2,
  h3: H3,
  hr: Break,
  ThematicBreak,
  Link,
};

const BlogPost: React.FC<{}> = ({ children }) => {
  return (
    <MDXProvider components={comps}>
      <Layout>
        <StyledSection>
          <Row container>
            <Column minSpan={12}>{children}</Column>
          </Row>
        </StyledSection>
      </Layout>
    </MDXProvider>
  );
};

export default BlogPost;
