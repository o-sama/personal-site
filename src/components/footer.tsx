import React, { FC } from "react";
import { socials } from "../assets";

// styles
import { Row, Column } from "../styled-components/styled-grid";
import styled, { useTheme } from "styled-components";
import { StyledSection } from "../styled-components/styled-section";
import { TertiaryText } from "../styled-components/styled-span";

interface Props {}

const iconColsLight: { [key: string]: any } = {};
const iconColsDark: { [key: string]: any } = {};

Object.entries(socials).map((e: { [key: string]: any }) => {
  const link = e[1]["link"];
  const ComponentLight = styled(e[1]["lightMode"])`
    height: 3vmin;
    width: 3vmin;

    :hover {
      transform: scale(1.5);
    }
    transition: all 0.35s ease-in-out;
  `;
  const ComponentDark = styled(e[1]["darkMode"])`
    height: 3vmin;
    width: 3vmin;

    :hover {
      transform: scale(1.5);
    }
    transition: all 0.35s ease-in-out;
  `;

  iconColsLight[e[0]] = (
    <Column key={e[0]} span={1.5}>
      {e[0] === "download" ? (
        <a
          href={link}
          download="Osama Faqhruldin Resume.pdf"
          style={{ alignSelf: "center" }}
          aria-label={e[0]}
        >
          <ComponentLight />
        </a>
      ) : (
        <a
          href={link}
          target="_blank"
          style={{ alignSelf: "center" }}
          aria-label={e[0]}
        >
          <ComponentLight />
        </a>
      )}
    </Column>
  );

  iconColsDark[e[0]] = (
    <Column key={e[0]} span={1.5}>
      {e[0] === "download" ? (
        <a
          href={link}
          download="Osama Faqhruldin Resume.pdf"
          style={{ alignSelf: "center" }}
          aria-label={e[0]}
        >
          <ComponentDark />
        </a>
      ) : (
        <a
          href={link}
          target="_blank"
          style={{ alignSelf: "center" }}
          aria-label={e[0]}
        >
          <ComponentDark />
        </a>
      )}
    </Column>
  );
});

const Footer: FC<Props> = () => {
  const theme = useTheme();
  return (
    <footer style={{ marginTop: "auto" }}>
      <StyledSection secondary notchTR style={{ padding: "2vh 0" }}>
        <Row
          container
          center
          style={{ height: "fit-content", padding: "1.5vh 0" }}
        >
          <>
            {Object.keys(socials).map((e) =>
              theme["name"] === "light" ? iconColsLight[e] : iconColsDark[e]
            )}
          </>
        </Row>
        <Row container center style={{ padding: "1.5vh 0" }}>
          <TertiaryText>Made with Gatsby & styled Components</TertiaryText>
        </Row>
      </StyledSection>
    </footer>
  );
};

export default Footer;
