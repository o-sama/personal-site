import styled from "styled-components";

export const Card = styled.div`
  width: 30vw;
  height: 30vw;
  border-radius: 0.5vw;
  box-shadow: 0.1vw 0.0725vw 0.1vw ${(props) => props.theme["shadow"]["color"]},
    -0.025vw -0.025vw 0.05vw ${(props) => props.theme["shadow"]["color"]};
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme["background"]["primary"]};

  :hover {
    transform: scale3d(1.1, 1.1, 1.1);
    background: ${(props) => props.theme["background"]["liftedElements"]};
    transition: background-color
        ${(props) =>
          `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`}
        transform
        ${(props) =>
          `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`},
      box-shadow
        ${(props) =>
          `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
    box-shadow: 0.15vw 0.125vw 0.2vw
        ${(props) => props.theme["shadow"]["color"]},
      -0.025vw -0.025vw 0.1vw ${(props) => props.theme["shadow"]["color"]};
  }
  transition: transform
      ${(props) =>
        `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`},
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
`;
