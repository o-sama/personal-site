import React, { FC, useContext } from "react";
import resumeFile from "../content/resume.json";
import { iconMap } from "../icons";

// styles
import styled, { ThemeContext } from "styled-components";
import { Row, Column } from "../styled-components/styled-grid";
import { H3 } from "../styled-components/styled-headers";

interface Props {}

const iconColsLight: { [key: string]: any } = {};
const iconColsDark: { [key: string]: any } = {};
Object.entries(resumeFile["Languages and Tools"]).map((entry) => {
  entry[1].map((element) => {
    const ComponentLight = styled(iconMap[element]["lightMode"])`
      margin-left: 12.5%;
      margin-right: 12.5%;
      height: 5vw;
      width: 5vw;
      align-self: center;
    `;
    const ComponentDark = styled(iconMap[element]["darkMode"])`
      margin-left: 12.5%;
      margin-right: 12.5%;
      height: 5vw;
      width: 5vw;
      align-self: center;
    `;
    iconColsLight[element] = (
      <Column span={2} style={{ aspectRatio: "1/1" }} key={element}>
        <ComponentLight />
      </Column>
    );
    iconColsDark[element] = (
      <Column span={2} style={{ aspectRatio: "1/1" }} key={element}>
        <ComponentDark />
      </Column>
    );
  });
});

const LftSection: FC<Props> = () => {
  const theme = useContext(ThemeContext);
  const rows = Object.entries(resumeFile["Languages and Tools"]).map(
    (entry) => {
      return (
        <React.Fragment key={entry[0]}>
          <Row>
            <Row center>
              <H3 key={"h3_" + entry[0]}>{entry[0]}</H3>
            </Row>
            <Row center container>
              {entry[1].map((e) =>
                theme.name === "light" ? iconColsLight[e] : iconColsDark[e]
              )}
            </Row>
          </Row>
        </React.Fragment>
      );
    }
  );
  return <div>{rows.map((e) => e)}</div>;
};
export default LftSection;
