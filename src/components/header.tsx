import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import { siteIcons, themeIcons } from "../assets";
import { ThemeUpdateContext } from "../../themeProvider";

// styles
import { Nav } from "../styled-components/styled-nav";
import { Row, Column } from "../styled-components/styled-grid";
import { light, dark } from "../styled-components/themes";
import styled, { useTheme } from "styled-components";
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
  color: ${(props) => props.theme.mainText};
  text-decoration: none;

  :hover {
    transform: scale(1.2);
  }
  transition: all 0.35s ease-in-out;
`;

const ThemeIconLight = styled(themeIcons["theme"]["lightMode"])<{
  switched: boolean;
}>`
  /* Properties */
  height: 1.6vw;
  width: 1.6vw;
  margin-top: 0.075vw;
  align-self: center;
`;

const ThemeIconDark = styled(themeIcons["theme"]["darkMode"])<{
  switched: boolean;
}>`
  /* Properties */
  height: 1.6vw;
  width: 1.6vw;
  margin-top: 0.075vw;
  align-self: center;
`;

const IconLight = styled(siteIcons["site"]["lightMode"])`
  height: 4vh;
  width: 4vh;
  margin-left: 1vw;
  align-self: right;
`;

const IconDark = styled(siteIcons["site"]["darkMode"])`
  height: 4vh;
  width: 4vh;
  margin-left: 1vw;
  align-self: right;
`;

const Header: FC<Props> = ({ menuLinks }) => {
  const theme = useTheme() as typeof light;
  const updateTheme = useContext(ThemeUpdateContext);

  return (
    <header>
      <Nav>
        <Row
          center
          style={{
            justifyContent: "right",
            width: "100%",
          }}
        >
          <Column style={{ marginRight: "auto" }}>
            {theme.name === "light" ? <IconLight /> : <IconDark />}
          </Column>
          <Column style={{ margin: "0 auto" }}>
            <Row center style={{ flexWrap: "nowrap" }}>
              {menuLinks.map((link, i) => (
                <Column
                  key={link.name}
                  style={{ width: "fit-content", padding: "1vh 10%" }}
                >
                  <NavLink to={link.link}>{link.name}</NavLink>
                </Column>
              ))}
            </Row>
          </Column>

          <Column style={{ marginLeft: "auto", textAlign: "center" }}>
            <ThemeButton
              onClick={() => updateTheme(theme === light ? dark : light)}
            >
              <ThemeIconContainer switch={theme === light ? false : true}>
                {theme.name === "light" ? (
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
