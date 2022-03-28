import React, { FC } from "react";
import resumeFile from "../content/resume.json";
import { iconMap } from "../assets";

// styles
import styled, { useTheme } from "styled-components";
import { Column, Row } from "../styled-components/styled-grid";
import { H3 } from "../styled-components/styled-headers";
import { StyledListItem } from "../styled-components/styled-list";
import { breakpoints } from "../styled-components/themes";

interface Props {}

const iconColsLight: { [key: string]: any } = {};
const iconColsDark: { [key: string]: any } = {};
resumeFile["Previous Experience"].map((exp) => {
  const ComponentLight = styled(iconMap[exp["logo"]]["lightMode"])`
    height: 9.25vw;
    width: 9.25vw;
    align-self: center;

    @media only screen and (min-width: ${breakpoints["s"]}) {
      width: 7.5vw;
      height: 7.5vw;
    }

    @media only screen and (min-width: ${breakpoints["m"]}) {
      width: 6.25vw;
      height: 6.25vw;
    }

    @media only screen and (min-width: ${breakpoints["l"]}) {
      height: 5vw;
      width: 5vw;
    }

    @media only screen and (min-width: ${breakpoints["xl"]}) {
      width: 4.4vw;
      height: 4.4vw;
    }
  `;
  const ComponentDark = styled(iconMap[exp["logo"]]["darkMode"])`
    height: 9.25vw;
    width: 9.25vw;
    align-self: center;

    @media only screen and (min-width: ${breakpoints["s"]}) {
      width: 7.5vw;
      height: 7.5vw;
    }

    @media only screen and (min-width: ${breakpoints["m"]}) {
      width: 6.25vw;
      height: 6.25vw;
    }

    @media only screen and (min-width: ${breakpoints["l"]}) {
      height: 5vw;
      width: 5vw;
    }

    @media only screen and (min-width: ${breakpoints["xl"]}) {
      width: 4.4vw;
      height: 4.4vw;
    }
  `;
  iconColsLight[exp["logo"]] = (
    <Row center key={exp["position"]}>
      <ComponentLight />
    </Row>
  );
  iconColsDark[exp["logo"]] = (
    <Row center key={exp["position"]}>
      <ComponentDark />
    </Row>
  );
});

const ExperienceSection: FC<Props> = () => {
  const theme = useTheme();
  return (
    <>
      {resumeFile["Previous Experience"].map((exp) => {
        return (
          <Row key={exp["position"]} style={{ textAlign: "center" }}>
            <Column>
              <Row center>
                <Column>
                  <Row center>
                    <H3>{exp["position"]}</H3>
                  </Row>
                  {theme["name"] === "light"
                    ? iconColsLight[exp["logo"]]
                    : iconColsDark[exp["logo"]]}
                  <Row secondary center>
                    <strong>{exp["company"]}</strong>
                  </Row>
                  <Row secondary center>
                    {exp["locaiton"]}
                  </Row>
                  <Row secondary center>
                    <i>{exp["dateRange"]}</i>
                  </Row>
                </Column>
              </Row>
              <Row style={{ textAlign: "left" }}>
                <ul style={{ paddingLeft: "5%" }}>
                  {exp["description"].map((e, i) => (
                    <StyledListItem
                      dangerouslySetInnerHTML={{ __html: e }}
                      key={i}
                    />
                  ))}
                </ul>
              </Row>
            </Column>
          </Row>
        );
      })}
    </>
  );
};

export default ExperienceSection;
