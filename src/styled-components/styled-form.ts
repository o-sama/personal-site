import styled from "styled-components";

const Input = styled.input`
  background: ${(props) => props.theme["background"]["primary"]};
  color: ${(props) => props.theme["text"]["primary"]};
  width: 100%;
  border-width: 2px;
  border-style: outset;
  border-color: ${(props) => props.theme["text"]["secondary"]};
`;

const Label = styled.label`
  padding: 3%;
  text-align: left;
  margin-right: 5%;
`;

const TextArea = styled.textarea`
  background: ${(props) => props.theme["background"]["primary"]};
  color: ${(props) => props.theme["text"]["primary"]};
  width: 100%;
  max-height: 25vh;
  border-width: 2px;
  border-style: outset;
  border-color: ${(props) => props.theme["text"]["secondary"]};
`;

const Form = styled.form`
  width: 80%;
`;

export { Input, Label, TextArea, Form };
