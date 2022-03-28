import styled from "styled-components";
import { breakpoints } from "./themes";

const Row = styled.div<{
  center?: boolean;
  secondary?: boolean;
  container?: boolean;
}>`
  /* Properties */
  width: ${(props) => (props.container ? "85%" : "95%")};
  margin: auto;
  display: flex;
  z-index: 11;

  /* Flex Properties */
  flex-direction: row;
  flex-wrap: wrap;

  /* Content */
  justify-content: ${(props) => (props.center ? "center" : "space-evenly")};
  text-align: ${(props) => (props.center ? "center" : "left")};
  color: ${(props) =>
    props.secondary
      ? props.theme["text"]["secondary"]
      : props.theme["text"]["primary"]};

  /* After */
  /* &::after {
    content: "";
    clear: both;
    display: table;
  } */

  @media only screen and (min-width: 768px) {
    width: ${(props) => (props.container ? "80%" : "100%")};
  }
`;

const Column = styled.div<{
  minSpan?: number;
  maxSpan?: number;
  secondary?: boolean;
  tertiaryText?: boolean;
}>`
  /* Properties */
  float: left;
  min-width: ${(props) =>
    props.minSpan ? (props.minSpan / 12) * 100 : "8.33"}%;
  max-width: ${(props) =>
    props.maxSpan ? (props.maxSpan / 12) * 100 : "100"}%;
  display: flex;
  z-index: 11;

  /* Flex Properties */
  flex-direction: column;
  flex-wrap: wrap;

  /* Content */
  justify-content: center;
  color: ${(props) =>
    props.secondary
      ? props.theme["text"]["secondary"]
      : props.theme["text"]["primary"]};
`;

export { Row, Column };
