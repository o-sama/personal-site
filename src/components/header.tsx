import React, { FC, useContext } from "react";
import { Link } from "gatsby";
import { siteIcons, themeIcons } from "../assets";
import { ThemeUpdateContext } from "../../themeProvider";

// styles
import { Nav } from "../styled-components/styled-nav";
import { Row, Column } from "../styled-components/styled-grid";
import { light, dark } from "../styled-components/themes";
import styled, { useTheme } from "styled-components";
import { breakpoints } from "../styled-components/themes";
import {
  ThemeButton,
  ThemeIconContainer,
} from "../styled-components/styled-theme-button";

interface Props {
  siteTitle: string;
  menuLinks: [
    {
      name: string;
      link: string;
    }
  ];
}

const NavLink = styled(Link)`
  color: ${(props) => props.theme["text"]["primary"]};
  text-decoration: none;

  :hover {
    transform: scale(1.2) translateZ(0);
  }
  transition: all
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
`;

const ThemeIconLight = styled(themeIcons["theme"]["lightMode"])<{
  switched: boolean;
}>`
  /* Properties */
  height: 3vw;
  width: 3vw;
  align-self: center;

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 2.4vw;
    height: 2.4vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 2vw;
    height: 2vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    width: 1.6vw;
    height: 1.6vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 1.4vw;
    height: 1.4vw;
  }
`;

const ThemeIconDark = styled(themeIcons["theme"]["darkMode"])<{
  switched: boolean;
}>`
  /* Properties */
  height: 3vw;
  width: 3vw;
  align-self: center;

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 2.4vw;
    height: 2.4vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 2vw;
    height: 2vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    width: 1.6vw;
    height: 1.6vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 1.4vw;
    height: 1.4vw;
  }
`;

const IconLight = styled(siteIcons["site"]["lightMode"])`
  /* Properties */
  height: 4.7vw;
  width: 4.7vw;
  align-self: center;

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 3.75vw;
    height: 3.75vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 3.125vw;
    height: 3.125vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    width: 2.5vw;
    height: 2.5vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 2.2vw;
    height: 2.2vw;
  }
`;

const IconDark = styled(siteIcons["site"]["darkMode"])`
  /* Properties */
  height: 4.7vw;
  width: 4.7vw;
  align-self: center;

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 3.75vw;
    height: 3.75vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 3.125vw;
    height: 3.125vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    width: 2.5vw;
    height: 2.5vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 2.2vw;
    height: 2.2vw;
  }
`;

const Header: FC<Props> = ({ menuLinks }) => {
  const theme = useTheme();
  const updateTheme = useContext(ThemeUpdateContext);

  return (
    <header>
      <Nav>
        <Row
          style={{
            width: "100%",
          }}
        >
          <Column maxSpan={2}>
            <Link
              to="/"
              aria-label="home"
              style={{ width: "fit-content", alignSelf: "center" }}
            >
              {theme["name"] === "light" ? <IconLight /> : <IconDark />}
            </Link>
          </Column>
          <Column maxSpan={8} style={{ margin: "0 auto" }}>
            <Row center style={{ flexWrap: "nowrap" }}>
              {menuLinks.map((link) => (
                <Column key={link.name} style={{ padding: "1vw 1.5vw" }}>
                  <NavLink to={link.link} aria-label={link.name}>
                    {link.name}
                  </NavLink>
                </Column>
              ))}
            </Row>
          </Column>

          <Column
            maxSpan={2}
            style={{
              textAlign: "center",
            }}
          >
            <ThemeButton
              name="change theme"
              aria-label="change theme"
              onClick={() => updateTheme(theme === light ? dark : light)}
            >
              <ThemeIconContainer switch={theme === light ? false : true}>
                {theme["name"] === "light" ? (
                  <ThemeIconLight />
                ) : (
                  <ThemeIconDark />
                )}
              </ThemeIconContainer>
            </ThemeButton>
          </Column>
        </Row>
      </Nav>
    </header>
  );
};
export default Header;
