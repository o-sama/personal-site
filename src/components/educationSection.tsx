import React, { FC } from "react";
import resumeFile from "../content/resume.json";
import { iconMap } from "../assets";

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
  const Icon = iconMap["Uwaterloo"][theme["name"] + "Mode"];
  return (
    <>
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
      <Row
        style={{
          marginTop: "1rem",
          alignSelf: "center",
          justifyContent: "flex-start",
        }}
      >
        {courseCols.map((col, i) => (
          <Column minSpan={3} key={i}>
            <ul style={{ margin: "0" }}>{col.map((e) => e)}</ul>
          </Column>
        ))}
      </Row>
      <Row>
        <Icon
          style={{
            height: "75%",
            width: "75%",
            alignSelf: "center",
          }}
        />
      </Row>
    </>
  );
};
export default EducationSection;
