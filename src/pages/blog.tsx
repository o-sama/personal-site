import React from "react";
import { Layout } from "../components/layout";
import styled from "styled-components";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { H1, H2, H3 } from "../styled-components/styled-headers";
import { Row, Column } from "../styled-components/styled-grid";
import { Button } from "../styled-components/styled-button";
import { Label, Input, Form, TextArea } from "../styled-components/styled-form";

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
