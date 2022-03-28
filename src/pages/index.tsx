import * as React from "react";
import { useState } from "react";
import { Layout } from "../components/layout";
import { me } from "../assets";
import indexData from "../content/index.json";

// styles
import styled from "styled-components";
import { Column, Row } from "../styled-components/styled-grid";
import { StyledList, StyledListItem } from "../styled-components/styled-list";
import { StyledSection } from "../styled-components/styled-section";
import { H1, H2 } from "../styled-components/styled-headers";
import { breakpoints } from "../styled-components/themes";

const Image = styled.img`
  height: 30vw;
  width: 30vw;
  border: 3px solid
    ${(props) => props.theme["background"]["foregroundElements"]};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 25vw;
    height: 25vw;
    ${(props) => props.theme["background"]["foregroundElements"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 20vw;
    height: 20vw;
    border: 4px solid
      ${(props) => props.theme["background"]["foregroundElements"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    height: 15vw;
    width: 15vw;
    border: 5px solid
      ${(props) => props.theme["background"]["foregroundElements"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 12.5vw;
    height: 12.5vw;
    ${(props) => props.theme["background"]["foregroundElements"]};
  }

  border-radius: 50%;
`;

// markup
const IndexPage: React.FC = () => {
  const [aboutMaxSpan, setAboutMaxSpan] = useState(12);
  const [interestsMaxSpan, setInterestsMaxSpan] = useState(12);

  const handleResize = () => {
    const currentWindowWidth = document?.body.clientWidth;
    currentWindowWidth < 600 && aboutMaxSpan !== 12
      ? setAboutMaxSpan(12)
      : setAboutMaxSpan(8);
    currentWindowWidth < 600 && interestsMaxSpan !== 12
      ? setInterestsMaxSpan(12)
      : setInterestsMaxSpan(4);
  };

  React.useEffect(() => {
    if (document.body.clientWidth > 600) {
      setAboutMaxSpan(8);
      setInterestsMaxSpan(4);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <StyledSection>
          <Row>
            <Column maxSpan={aboutMaxSpan}>
              <Row center>
                <H1 style={{ alignSelf: "center" }}>About Me</H1>
              </Row>
              <Row center>
                <Image
                  src={me}
                  alt="Me!"
                  style={{ alignSelf: "center", marginTop: "-2%" }}
                />
              </Row>
              {indexData["About"].map((p) =>
                p.map((s, i) => (
                  <Row
                    container
                    style={{
                      margin: "2vh auto",
                      justifyContent: "flex-start",
                    }}
                    key={i}
                  >
                    {s}
                  </Row>
                ))
              )}
            </Column>
            <Column
              maxSpan={interestsMaxSpan}
              style={{
                width: "100%",
                height: "100%",
                zIndex: "10",
                alignSelf: "flex-end",
              }}
            >
              <Row>
                <H2 style={{ alignSelf: "center" }}>What I Like</H2>
              </Row>
              <Row style={{ justifyContent: "left" }}>
                <StyledList>
                  {indexData["Interests"].map((e, i) => (
                    <StyledListItem key={i}>{e}</StyledListItem>
                  ))}
                </StyledList>
              </Row>
            </Column>
          </Row>
        </StyledSection>
      </main>
    </Layout>
  );
};

export default IndexPage;
