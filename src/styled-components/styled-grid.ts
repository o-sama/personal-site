import styled from "styled-components";

const Row = styled.div<{
  center?: boolean;
  secondary?: boolean;
  container?: boolean;
}>`
  /* Properties */
  width: ${(props) => (props.container ? "85%" : "95%")};
  margin: auto;
  display: flex;
  z-index: 11;

  /* Flex Properties */
  flex-direction: row;
  flex-wrap: wrap;

  /* Content */
  justify-content: ${(props) => (props.center ? "center" : "safe")};
  color: ${(props) =>
    props.secondary ? props.theme.secondaryText : props.theme.mainText};

  /* After */
  &::after {
    content: "";
    clear: both;
    display: table;
  }

  @media only screen and (min-width: 768px) {
    width: ${(props) => (props.container ? "75%" : "100%")};
  }
`;

const Column = styled.div<{ span?: number; secondary?: boolean }>`
  /* Properties */
  float: left;
  width: ${(props) => (props.span ? (props.span / 12) * 100 : "100")}%;
  display: flex;
  z-index: 11;

  /* Flex Properties */
  flex-direction: column;
  flex-wrap: wrap;

  /* Content */
  justify-content: center;
  color: ${(props) =>
    props.secondary ? props.theme.secondaryText : props.theme.mainText};

  @media only screen and (min-width: 768px) {
    width: ${(props) => (props.span ? (props.span / 12) * 100 : "8.33")}%;
  }
`;

export { Row, Column };
