import styled from "styled-components";

export const Card = styled.div`
  width: 20vw;
  height: 17.5vw;
  border-radius: 0.5vw;
  box-shadow: 0.1vw 0.0725vw 0.1vw ${(props) => props.theme.shadows},
    -0.025vw -0.025vw 0.05vw ${(props) => props.theme.shadows};
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.mainBackground};

  :hover {
    transform: scale3d(1.1, 1.1, 1.1);
    background: ${(props) => props.theme.liftedElements};
    transition: background-color ease-in-out 0.35s transform ease-in-out 0.35s,
      box-shadow ease-in-out 0.35s;
    box-shadow: 0.15vw 0.125vw 0.2vw ${(props) => props.theme.shadows},
      -0.025vw -0.025vw 0.1vw ${(props) => props.theme.shadows};
  }
  transition: transform ease-in-out 0.35s, box-shadow ease-in-out 0.35s;
`;
