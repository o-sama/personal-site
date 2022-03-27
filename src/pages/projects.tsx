import React from "react";
import { Layout } from "../components/layout";
import styled from "styled-components";
import projectsFile from "../content/projects.json";
import { projectImages } from "../assets";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { H1 } from "../styled-components/styled-headers";
import { Row, Column } from "../styled-components/styled-grid";
import { Card } from "../styled-components/styled-card";

const CardContainer = styled(Column)`
  margin: 1.5vh 0;
`;

const projects = projectsFile["projectList"].map((p) => {
  return (
    <a href={p["link"]} target="_blank" aria-label={p["name"]}>
      <CardContainer span={6}>
        <Card>
          <Row center>{p["name"]}</Row>
          <Row center>
            <img
              src={projectImages[p["image"]]}
              alt={p["name"]}
              style={{ width: "75%" }}
            ></img>
          </Row>
          <Row center style={{ textAlign: "center" }}>
            {p["description"]}
          </Row>
        </Card>
      </CardContainer>
    </a>
  );
});

const ProjectsPage = () => {
  return (
    <Layout>
      <main>
        <title>Contact</title>
        <H1>Projects</H1>
        <StyledSection>
          <Row container center>
            {projects.map((p) => p)}
            <CardContainer span={6}>
              <Card>
                <Row center>Coming Soon!</Row>
              </Card>
            </CardContainer>
          </Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
