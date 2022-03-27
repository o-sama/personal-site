import React, { FC, useContext } from "react";
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
  color: ${(props) => props.theme["text"]["primary"]};
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
  align-self: center;
`;

const ThemeIconDark = styled(themeIcons["theme"]["darkMode"])<{
  switched: boolean;
}>`
  /* Properties */
  height: 1.6vw;
  width: 1.6vw;
  align-self: center;
`;

const IconLight = styled(siteIcons["site"]["lightMode"])`
  height: 2.5vw;
  width: 2.5vw;

  align-self: center;
`;

const IconDark = styled(siteIcons["site"]["darkMode"])`
  height: 2.5vw;
  width: 2.5vw;
  align-self: center;
`;

const Header: FC<Props> = ({ menuLinks }) => {
  const theme = useTheme();
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
          <Column span={2} style={{ marginRight: "auto" }}>
            <Link
              to="/"
              aria-label="home"
              style={{ width: "fit-content", marginLeft: "0.5vw" }}
            >
              {theme["name"] === "light" ? <IconLight /> : <IconDark />}
            </Link>
          </Column>
          <Column span={8} style={{ margin: "0 auto" }}>
            <Row center style={{ flexWrap: "nowrap" }}>
              {menuLinks.map((link) => (
                <Column
                  key={link.name}
                  style={{ width: "fit-content", padding: "1vw 1.5vw" }}
                >
                  <NavLink to={link.link} aria-label={link.name}>
                    {link.name}
                  </NavLink>
                </Column>
              ))}
            </Row>
          </Column>

          <Column
            span={2}
            style={{
              marginLeft: "auto",
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
