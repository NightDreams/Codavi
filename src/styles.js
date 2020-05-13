import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
    body {
        margin: 0;
        font-family: 'Poppins', serif;
    }
    button:focus {
        outline: none;
    }
`;

export const Button = styled.button`
  font-family: "Poppins", serif;
  font-weight: 500;
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 6px;
  color: #50c7d2;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  background: ${(props) =>
    (props.type === "primary" && "#50c7d214") ||
    (props.type === "danger" && "#FF4D4E") ||
    (props.type === "disabled" && "#DEDEDE")};

  span {
    vertical-align: middle;
    & svg {
      width: 20px;
      height: 20px;
      vertical-align: bottom;
    }
  }
`;
