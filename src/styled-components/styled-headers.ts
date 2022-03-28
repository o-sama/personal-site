import styled from "styled-components";
import { breakpoints } from "./themes";

const H1 = styled.h1`
  text-align: center;
  z-index: 11;
  color: ${(props) => props.theme["text"]["headers"]};
  font-family: ${(props) => props.theme["font"]["family"]["secondary"]};
  font-weight: 900;
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["h1"]};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["h1"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["h1"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["h1"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["h1"]};
  }
`;
const H2 = styled.h2`
  padding-top: 1vh;
  z-index: 11;
  color: ${(props) => props.theme["text"]["headers"]};
  font-family: ${(props) => props.theme["font"]["family"]["secondary"]};
  font-weight: 900;
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["h2"]};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["h2"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["h2"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["h2"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["h2"]};
  }
`;
const H3 = styled.h3`
  z-index: 11;
  color: ${(props) => props.theme["text"]["headers"]};
  font-family: ${(props) => props.theme["font"]["family"]["secondary"]};
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["h3"]};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["h3"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["h3"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["h3"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["h3"]};
  }
`;

export { H1, H2, H3 };
