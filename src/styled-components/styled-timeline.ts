import styled from "styled-components";
import { Row } from "./styled-grid";

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
  transform: ${(props) =>
    props.shouldBeSmall
      ? "translateZ(0) scale(0.95)"
      : " translateZ(0) scale(1.1)"};
  transition: all ease-in-out 0.35s;
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
  transition: all ease-in-out 0.35s;
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
  font-family: ${(props) => props.theme.specialFont};
  color: ${(props) => props.theme.secondaryText};
  cursor: pointer;
  position: absolute;

  /* Transforms & Transitions */
  opacity: ${(props) => (props.shouldBeHidden ? 0 : 1)};
  visibility: ${(props) => (props.shouldBeHidden ? "hidden" : "visible")};
  transition: ${(props) => `${0.35 + 0.35 * props.current}s`};
`;

export { TimelineDiv, TimelineNode, TimelineText };
