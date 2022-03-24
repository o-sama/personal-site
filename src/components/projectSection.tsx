import React, { FC, useContext } from "react";
import resumeFile from "../content/resume.json";
import { iconMap } from "../icons";

// styles
import styled, { ThemeContext } from "styled-components";
import { Row, Column } from "../styled-components/styled-grid";
import { H3 } from "../styled-components/styled-headers";
import { StyledListItem } from "../styled-components/styled-list";

interface Props {}

const ProjectSection: FC<Props> = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      {resumeFile["Projects"].map((proj) => {
        return (
          <Row key={proj["name"]}>
            <Row center>
              <H3>{proj["name"]}</H3>
            </Row>
            <Row secondary center>
              <i>{proj["duration"]}</i>
            </Row>
            <Row>
              <ul>
                {proj["description"].map((e, i) => (
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
export default ProjectSection;
