import styled from "styled-components";

export const Button = styled.button`
  width: 14vw;
  height: 3.5vw;
  align-self: center;
  border-radius: 2vw;
  border-style: outset;
  border-color: ${(props) => props.theme.secondaryText};
  background: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.secondaryText};

  :hover {
    background: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.mainText};
    transition: all ease-in-out 0.35s;
  }
`;
