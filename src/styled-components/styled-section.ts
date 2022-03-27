import styled from "styled-components";
import { breakpoints } from "./themes";

export const StyledSection = styled.section<{
  secondary?: boolean;
  notchTL?: boolean;
  notchTR?: boolean;
  notchBL?: boolean;
  notchBR?: boolean;
}>`
  /* Properties */
  background-color: ${(props) =>
    props.secondary
      ? props.theme["background"]["secondary"]
      : props.theme["background"]["primary"]};
  padding-bottom: 2vw;
  position: relative;

  /* Content */
  font-family: ${(props) => props.theme["font"]["family"]["primary"]};
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["primary"]};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["primary"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["primary"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["primary"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["primary"]};
  }

  ${({ notchTL, theme, secondary }) =>
    notchTL &&
    `
      &::before {content: "";
            position: absolute;
            top: -30vw;
            left: 0;
            height: 30vw;
            width: 30vw;
            border-bottom-left-radius: 50%;
            box-shadow: 0 15vw 0 0
              ${
                secondary
                  ? theme["background"]["secondary"]
                  : theme["background"]["primary"]
              };
            z-index: 10;
            }
    `}

  ${({ notchTR, theme, secondary }) =>
    notchTR &&
    `
      &::before {content: "";
            position: absolute;
            top: -30vw;
            right: 0;
            height: 30vw;
            width: 30vw;
            border-bottom-right-radius: 50%;
            box-shadow: 0 15vw 0 0
              ${
                secondary
                  ? theme["background"]["secondary"]
                  : theme["background"]["primary"]
              };
            z-index: 10;
            }
            
    `}

    ${({ notchBL, theme, secondary }) =>
    notchBL &&
    `
      &::after {content: "";
            position: absolute;
            bottom: -30vw;
            left: 0;
            height: 30vw;
            width: 30vw;
            border-top-left-radius: 50%;
            box-shadow: 0 -15vw 0 0
              ${
                secondary
                  ? theme["background"]["secondary"]
                  : theme["background"]["primary"]
              };
            z-index: 10;
            }
    `}

    ${({ notchBR, theme, secondary }) =>
    notchBR &&
    `
      &::after {content: "";
            position: absolute;
            bottom: -30vw;
            right: 0;
            height: 30vw;
            width: 30vw;
            border-top-right-radius: 50%;
            box-shadow: 0 -15vw 0 0
              ${
                secondary
                  ? theme["background"]["secondary"]
                  : theme["background"]["primary"]
              };
            z-index: 10;
            }
    `}
`;
