import { styled } from "styled-components";

// size 속성 옵션  L / M / S
// state 속성 옵션 primary / negative / disable

export const BtnFill = styled.button`
  width: ${(props) => {
    return props.width ? props.width + "px" : "";
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "L":
        return "15px";
      default:
        return "10px";
    }
  }};
  font-size: ${(props) => {
    switch (props.size) {
      case "L":
        return "22px";
      case "M":
        return "18px";
      case "S":
        return "14px";

      default:
    }
  }};
  background-color: ${(props) => {
    switch (props.state) {
      case "disable":
        return "rgba(0, 0, 0, 0.1)";
      case "negative":
        return "#DB3333";
      default:
        return "#5763d4";
    }
  }};
  color: ${(props) => {
    switch (props.state) {
      case "disable":
        return "rgba(0, 0, 0, 0.4)";
      default:
        return "white";
    }
  }};
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 8px;
  margin: 2px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
`;
