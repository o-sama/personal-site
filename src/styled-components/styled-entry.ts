import styled, { keyframes } from "styled-components";
import { siteIcons } from "../assets";

const animateDimmer = keyframes`
from {
  opacity: 0.95;
  visibility: visible;
}
to {
  opacity:0;
  visibility: hidden;
  height: 0;
  width: 0;
  }
`;

const Dimmer = styled.div`
  /* height: 100%; */
  /* width: 100%; */
  z-index: 1500;
  background: black;
  transition: all
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  position: fixed;
  animation: ${animateDimmer} ease-in-out 1.5s;
  visibility: hidden;
`;

export { Dimmer };
