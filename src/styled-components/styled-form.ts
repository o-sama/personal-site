import styled from "styled-components";

const Input = styled.input`
  /* width: 40vw;
  position: relative;
  margin-left: 35%; */
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
  width: 100%;
  border-width: 2px;
  border-style: outset;
  border-color: ${(props) => props.theme.secondaryText};
`;

const Label = styled.label`
  /* width: 80%;
  position: relative;*/
  padding: 3%;
  text-align: left;
  margin-right: 5%;
`;

const TextArea = styled.textarea`
  /* width: 40vw;
  position: relative;
  margin-left: 35%; */
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainText};
  width: 100%;
  max-height: 25vh;
  border-width: 2px;
  border-style: outset;
  border-color: ${(props) => props.theme.secondaryText};
`;

const Form = styled.form`
  width: 80%;
`;

export { Input, Label, TextArea, Form };
