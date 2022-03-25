import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  padding-top: 2vh;
  color: ${(props) => props.theme.headers};
  font-family: ${(props) => props.theme.specialFont};
  font-weight: 900;
  font-size: 2.75vw;
`;
const H2 = styled.h2`
  padding-top: 1vh;
  color: ${(props) => props.theme.headers};
  font-family: ${(props) => props.theme.specialFont};
  font-weight: 900;
  font-size: 2vw;
`;
const H3 = styled.h3`
  color: ${(props) => props.theme.secondaryText};
  font-family: ${(props) => props.theme.specialFont};
  font-size: 1.5vw;
`;

export { H1, H2, H3 };
