import React, { FC } from "react";
import { socials } from "../assets";

// styles
import { Row, Column } from "../styled-components/styled-grid";
import styled, { useTheme } from "styled-components";
import { StyledSection } from "../styled-components/styled-section";
import { breakpoints } from "../styled-components/themes";
import { SecondaryText, TertiaryText } from "../styled-components/styled-span";

const now = new Date();

interface Props {}

const iconColsLight: { [key: string]: any } = {};
const iconColsDark: { [key: string]: any } = {};

Object.entries(socials).map((e: { [key: string]: any }) => {
  const link = e[1]["link"];
  const ComponentLight = styled(e[1]["lightMode"])`
    height: 5.25vw;
    width: 5.25vw;

    @media only screen and (min-width: ${breakpoints["s"]}) {
      width: 4.5vw;
      height: 4.5vw;
    }

    @media only screen and (min-width: ${breakpoints["m"]}) {
      width: 3.75vw;
      height: 3.75vw;
    }

    @media only screen and (min-width: ${breakpoints["l"]}) {
      height: 3vw;
      width: 3vw;
    }

    @media only screen and (min-width: ${breakpoints["xl"]}) {
      width: 2.6vw;
      height: 2.6vw;
    }

    :hover {
      transform: scale(1.5) translateZ(0);
    }
    transition: all
      ${(props) =>
        `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  `;
  const ComponentDark = styled(e[1]["darkMode"])`
    height: 5vw;
    width: 5vw;

    @media only screen and (min-width: ${breakpoints["s"]}) {
      width: 4vw;
      height: 4vw;
    }

    @media only screen and (min-width: ${breakpoints["m"]}) {
      width: 3.25vw;
      height: 3.25vw;
    }

    @media only screen and (min-width: ${breakpoints["l"]}) {
      height: 2.5vw;
      width: 2.5vw;
    }

    @media only screen and (min-width: ${breakpoints["xl"]}) {
      width: 2vw;
      height: 2vw;
    }

    :hover {
      transform: scale(1.5);
    }
    transition: all
      ${(props) =>
        `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  `;

  iconColsLight[e[0]] = (
    <Column key={e[0]} minSpan={1.5}>
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
    <Column key={e[0]} minSpan={1.5}>
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
          style={{ height: "fit-content", padding: "1.5vh 0 2.5vh" }}
        >
          <>
            {Object.keys(socials).map((e) =>
              theme["name"] === "light" ? iconColsLight[e] : iconColsDark[e]
            )}
          </>
        </Row>
        <Row container center>
          <TertiaryText>Made with Gatsby & styled Components</TertiaryText>
        </Row>
        <Row container center>
          <TertiaryText>
            <SecondaryText>© </SecondaryText>
            {now.getFullYear()} Osama Faqhruldin
          </TertiaryText>
        </Row>
      </StyledSection>
    </footer>
  );
};

export default Footer;
