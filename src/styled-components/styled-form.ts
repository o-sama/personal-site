import styled from "styled-components";
import { breakpoints } from "./themes";

const Input = styled.input`
  background: ${(props) => props.theme["background"]["primary"]};
  color: ${(props) => props.theme["text"]["primary"]};
  width: 80%;
  align-self: center;
  border-width: 2px;
  border-style: outset;
  border-color: ${(props) => props.theme["text"]["secondary"]};

  :focus-visible {
    outline-color: ${(props) => props.theme["button"]["borderColor"]};
  }
`;

const Label = styled.label`
  min-width: 20vw;
  padding: 3% 0;
  text-align: left;

  @media only screen and (min-width: ${breakpoints["s"]}) {
    min-width: 10vw;
  }
  @media only screen and (min-width: ${breakpoints["m"]}) {
    min-width: 5vw;
  }
`;

const TextArea = styled.textarea`
  background: ${(props) => props.theme["background"]["primary"]};
  color: ${(props) => props.theme["text"]["primary"]};
  width: 80%;
  align-self: center;
  max-height: 25vh;
  border-width: 2px;
  border-style: outset;
  border-color: ${(props) => props.theme["text"]["secondary"]};

  @media only screen and (max-width: ${breakpoints["s"]}) {
  }
`;

const Form = styled.form`
  width: 90%;
`;

export { Input, Label, TextArea, Form };
