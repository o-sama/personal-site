import React, { FC } from "react";
import bioFile from "../content/bio.json";

// styles
import { Column, Row } from "../styled-components/styled-grid";
import { H3 } from "../styled-components/styled-headers";
import { StyledListItem } from "../styled-components/styled-list";

interface Props {}

const ProjectSection: FC<Props> = () => {
  return (
    <>
      {bioFile["Projects"].map((proj) => {
        return (
          <Column key={proj["name"]}>
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
          </Column>
        );
      })}
    </>
  );
};
export default ProjectSection;
