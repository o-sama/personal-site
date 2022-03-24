import styled from "styled-components";

export const Button = styled.button`
  width: 16vw;
  height: 4vw;
  align-self: center;
  border-radius: 2vw;
  border-color: ${(props) => props.theme.secondaryText};
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.secondaryText};
`;
