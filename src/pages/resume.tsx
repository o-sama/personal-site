import * as React from "react";
import resumeFile from "../content/resume.json";
import { Layout } from "../components/layout";

// styles
import { StyledSection } from "../styled-components/styled-section";
import { Row } from "../styled-components/styled-grid";
import { H1, H2 } from "../styled-components/styled-headers";
import { HiddenAnchor } from "../styled-components/styled-anchor";

// Sections
import LftSection from "../components/lftSection";
import CertSection from "../components/certSection";
import ExperienceSection from "../components/experienceSection";
import ProjectSection from "../components/projectSection";
import EducationSection from "../components/educationSection";

const ResumePage = () => {
  try {
    return (
      <Layout headers={Object.keys(resumeFile)}>
        <main id="main">
          <title>Resume</title>
          <H1>Resume</H1>
          {/* LANGUAGES */}
          <StyledSection notchBR>
            <Row container center>
              <HiddenAnchor id="LanguagesandTools" title="H2" />
              <H2>Languages & Tools </H2>
            </Row>
            <Row container center>
              <LftSection />
            </Row>
          </StyledSection>
          {/* CERTIFICATIONS */}
          <StyledSection secondary notchTL notchBR>
            <Row container center>
              <HiddenAnchor id="Certifications" title="H2" />
              <H2>Certifications</H2>
            </Row>
            <Row container center>
              <CertSection />
            </Row>
          </StyledSection>
          {/* SKILLS */}
          {/* <StyledSection main={false}>
              <Row>
                <H2>Skills</H2>
              </Row>
              {skillSection}
            </StyledSection> */}
          {/* EXPERIENCE */}
          <StyledSection notchTL notchBL>
            <Row container center>
              <HiddenAnchor id="PreviousExperience" title="H2" />
              <H2>Previous Experience</H2>
            </Row>
            <Row container center>
              <ExperienceSection />
            </Row>
          </StyledSection>
          {/* PROJECTS */}
          <StyledSection secondary notchTR notchBL>
            <Row container center>
              <HiddenAnchor id="Projects" title="H2" />
              <H2>Projects</H2>
            </Row>
            <Row container center>
              <ProjectSection />
            </Row>
          </StyledSection>
          {/* EDUCATION */}
          <StyledSection notchTR>
            <Row container center>
              <HiddenAnchor id="Education" title="H2" />
              <H2>Education</H2>
            </Row>
            <Row container center>
              <EducationSection />
            </Row>
          </StyledSection>
        </main>
      </Layout>
    );
  } catch (error) {
    console.log(error);
  }
};

export default ResumePage;
