import React from "react";
import { Layout } from "../components/layout";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { H1 } from "../styled-components/styled-headers";
import { Row } from "../styled-components/styled-grid";

const BlogsPage = () => {
  return (
    <Layout>
      <main style={{ height: "50vh", paddingTop: "15vh" }}>
        <title>Contact</title>
        <H1>Contact</H1>
        <StyledSection>
          <Row container center></Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default BlogsPage;
