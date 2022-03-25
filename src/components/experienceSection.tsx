import React, { FC, useContext } from "react";
import resumeFile from "../content/resume.json";
import { iconMap } from "../icons";

// styles
import styled, { useTheme } from "styled-components";
import { Row, Column } from "../styled-components/styled-grid";
import { H3 } from "../styled-components/styled-headers";
import { StyledListItem } from "../styled-components/styled-list";
import { light } from "../styled-components/themes";

interface Props {}

const iconColsLight: { [key: string]: any } = {};
const iconColsDark: { [key: string]: any } = {};
resumeFile["Previous Experience"].map((exp) => {
  const ComponentLight = styled(iconMap[exp["logo"]]["lightMode"])`
    height: 5vw;
    width: 5vw;
    align-self: center;
  `;
  const ComponentDark = styled(iconMap[exp["logo"]]["darkMode"])`
    /* margin-left: 20%; */
    height: 5vw;
    width: 5vw;
    align-self: center;
  `;
  iconColsLight[exp["logo"]] = (
    <Column span={1.5} key={exp["position"]}>
      <ComponentLight />
    </Column>
  );
  iconColsDark[exp["logo"]] = (
    <Column span={1.5} style={{ justifyContent: "end" }} key={exp["position"]}>
      <ComponentDark />
    </Column>
  );
});

const ExperienceSection: FC<Props> = () => {
  const theme = useTheme() as typeof light;
  return (
    <>
      {resumeFile["Previous Experience"].map((exp) => {
        return (
          <Row key={exp["position"]}>
            <Row center>
              {/* style={{ width: `${100 / 6}%`, marginLeft: "auto" }} */}
              {theme.name === "light"
                ? iconColsLight[exp["logo"]]
                : iconColsDark[exp["logo"]]}
              <Column span={6}>
                <Row center style={{ marginLeft: `-${(100 / 12) * 1.5}%` }}>
                  <H3>{exp["position"]}</H3>
                </Row>
                <Row
                  secondary
                  center
                  style={{ marginLeft: `-${(100 / 12) * 1.5}%` }}
                >
                  <strong>{exp["company"]}</strong>
                </Row>
                <Row
                  secondary
                  center
                  style={{ marginLeft: `-${(100 / 12) * 1.5}%` }}
                >
                  {exp["locaiton"]}
                </Row>
                <Row
                  secondary
                  center
                  style={{ marginLeft: `-${(100 / 12) * 1.5}%` }}
                >
                  <i>{exp["dateRange"]}</i>
                </Row>
              </Column>
            </Row>
            <Row>
              <ul>
                {exp["description"].map((e, i) => (
                  <StyledListItem
                    dangerouslySetInnerHTML={{ __html: e }}
                    key={i}
                  />
                ))}
              </ul>
            </Row>
          </Row>
        );
      })}
    </>
  );
};

export default ExperienceSection;
