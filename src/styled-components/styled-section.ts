import styled, { css } from "styled-components";

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
      ? props.theme.secondaryBackground
      : props.theme.mainBackground};
  padding-bottom: 2vw;
  position: relative;

  /* Content */
  font-family: "roboto mono";

  ${({ notchTL, theme, secondary }) =>
    notchTL &&
    `
      &::before {content: "";
            position: absolute;
            top: -20vw;
            left: 0;
            height: 20vw;
            width: 20vw;
            border-bottom-left-radius: 50%;
            box-shadow: 0 10vw 0 0
              ${secondary ? theme.secondaryBackground : theme.mainBackground};
            z-index: 10;
            }
    `}

  ${({ notchTR, theme, secondary }) =>
    notchTR &&
    `
      &::before {content: "";
            position: absolute;
            top: -20vw;
            right: 0;
            height: 20vw;
            width: 20vw;
            border-bottom-right-radius: 50%;
            box-shadow: 0 10vw 0 0
              ${secondary ? theme.secondaryBackground : theme.mainBackground};
            z-index: 10;
            }
            
    `}

    ${({ notchBL, theme, secondary }) =>
    notchBL &&
    `
      &::after {content: "";
            position: absolute;
            bottom: -20vw;
            left: 0;
            height: 20vw;
            width: 20vw;
            border-top-left-radius: 50%;
            box-shadow: 0 -10vw 0 0
              ${secondary ? theme.secondaryBackground : theme.mainBackground};
            z-index: 10;
            }
    `}

    ${({ notchBR, theme, secondary }) =>
    notchBR &&
    `
      &::after {content: "";
            position: absolute;
            bottom: -20vw;
            right: 0;
            height: 20vw;
            width: 20vw;
            border-top-right-radius: 50%;
            box-shadow: 0 -10vw 0 0
              ${secondary ? theme.secondaryBackground : theme.mainBackground};
            z-index: 10;
            }
    `}
`;
