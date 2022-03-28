import styled from "styled-components";
import { Row } from "./styled-grid";
import { breakpoints } from "./themes";

const TimelineDiv = styled.div<{ gradients: string; shouldBeSmall: boolean }>`
  /* Properties */
  width: 0.5vw;
  height: 50vh;
  margin: 0 20%;
  background: linear-gradient(to bottom, ${(props) => props.gradients});
  background-clip: content-box;
  border-radius: 0.25vw;
  display: flex;
  position: relative;
  cursor: pointer;

  /* Transforms & Transitions */
  @media only screen and (min-width: ${breakpoints["m"]}) {
    transform: ${(props) =>
      props.shouldBeSmall
        ? "translateZ(0) scale(0.95)"
        : " translateZ(0) scale(1.1)"};
  }

  transition: all
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  backface-visibility: ${(props) =>
    props.shouldBeSmall ? "hidden" : "visible"};

  /* Flex Properties */
  flex-direction: column;

  /* Content */
  align-items: center;
`;

const TimelineNode = styled.div<{ mgin: number; gradients: string }>`
  /* Properties */
  height: 1.75vw;
  width: 1.75vw;
  position: absolute;
  background: linear-gradient(to bottom, ${(props) => props.gradients});
  transition: all
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  top: ${(props) => `${props.mgin}%`};
  border-radius: 50%;
  cursor: pointer;
`;

const TimelineText = styled(Row)<{
  shouldBeHidden: boolean;
  mgin: number;
  current: number;
}>`
  /* Properties */
  top: ${(props) => `${props.mgin}%`};
  justify-content: center;
  text-align: center;
  word-wrap: break-word;
  height: 2vh;
  vertical-align: bottom;
  font-family: ${(props) => props.theme["font"]["family"]["secondary"]};
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["secondary"]};
  color: ${(props) => props.theme["text"]["secondary"]};
  cursor: pointer;
  position: absolute;

  /* Transforms & Transitions */
  opacity: 0;
  visibility: hidden;
  transition: ${(props) => `${0.35 + 0.35 * props.current}s`};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["secondary"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["secondary"]};
    opacity: ${(props) => (props.shouldBeHidden ? 0 : 1)};
    visibility: ${(props) => (props.shouldBeHidden ? "hidden" : "visible")};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["secondary"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["secondary"]};
  }
`;

export { TimelineDiv, TimelineNode, TimelineText };
