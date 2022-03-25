import React, { FC } from "react";
import resumeFile from "../content/resume.json";
import { iconMap } from "../icons";

// styles
import { useTheme } from "styled-components";
import { Row, Column } from "../styled-components/styled-grid";
import { H3 } from "../styled-components/styled-headers";
import { StyledListItem } from "../styled-components/styled-list";
import { light } from "../styled-components/themes";

interface Props {}

const courseCols: JSX.Element[][] = [[], []];
resumeFile["Education"]["specialtyCourses"].map((e) => {
  courseCols[resumeFile["Education"]["specialtyCourses"].indexOf(e) % 2].push(
    <StyledListItem key={e}>{e}</StyledListItem>
  );
});

const EducationSection: FC<Props> = () => {
  const theme = useTheme() as typeof light;
  const Icon = iconMap["Uwaterloo"][theme.name + "Mode"];
  return (
    <Row>
      <Row center>
        <H3>{resumeFile["Education"]["school"]}</H3>
      </Row>
      <Row secondary center>
        {resumeFile["Education"]["degree"]}
      </Row>
      <Row secondary center>
        {resumeFile["Education"]["location"]}
      </Row>
      <Row secondary center>
        <i>{resumeFile["Education"]["graduationDate"]}</i>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        {courseCols.map((col, i) => (
          <Column span={3} style={{ justifyContent: "center" }} key={i}>
            <ul style={{ margin: "0" }}>{col.map((e) => e)}</ul>
          </Column>
        ))}
        <Column span={6} style={{ position: "relative" }}>
          <Icon
            style={{
              position: "absolute",
              right: 0,
              height: "75%",
              width: "75%",
            }}
          />
        </Column>
      </Row>
    </Row>
  );
};
export default EducationSection;
