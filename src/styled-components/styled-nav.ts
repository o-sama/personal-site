import styled from "styled-components";

export const Nav = styled.nav`
  /* Properties */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  visibility: visible;
  display: block;
  background-color: ${(props) => props.theme.mainBackground};
  padding: 0.5vh 0;
  border-bottom: 0.2vh solid
    ${(props) => (props.theme.navBorder ? props.theme.navBorder : "#708090")};

  /* Content */
  font-family: "raleway";
  color: ${(props) => props.theme.mainText};
`;
