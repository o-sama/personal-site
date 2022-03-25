import React from "react";
import { Layout } from "../components/layout";
import styled from "styled-components";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { H1 } from "../styled-components/styled-headers";
import { Row, Column } from "../styled-components/styled-grid";
import { Card } from "../styled-components/styled-card";

const CardContainer = styled(Column)`
  margin: 1.5vh 0;
`;

const ProjectsPage = () => {
  return (
    <Layout>
      <main>
        <title>Contact</title>
        <H1>Projects</H1>
        <StyledSection>
          <Row container center>
            <CardContainer span={4}>
              <Card>
                <Row center>sfsdfs</Row>
                <Row center>sfsdf</Row>
                <Row center>sdfds</Row>
              </Card>
            </CardContainer>
            <CardContainer span={4}>
              <Card>
                <Row center>sfsdfs</Row>
                <Row center>sfsdf</Row>
                <Row center>sdfds</Row>
              </Card>
            </CardContainer>
            <CardContainer span={4}>
              <Card>
                <Row center>sfsdfs</Row>
                <Row center>sfsdf</Row>
                <Row center>sdfds</Row>
              </Card>
            </CardContainer>
            <CardContainer span={4}>
              <Card>
                <Row center>sfsdfs</Row>
                <Row center>sfsdf</Row>
                <Row center>sdfds</Row>
              </Card>
            </CardContainer>

            <CardContainer span={4}>
              <Card>
                <Row center>Coming Soon...</Row>
              </Card>
            </CardContainer>
          </Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
