import React, { FC, useContext } from "react";
import resumeFile from "../content/resume.json";

// styles
import { ThemeContext } from "styled-components";
import { Row } from "../styled-components/styled-grid";
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
