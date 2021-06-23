import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: -webkit-fill-available;
  background: #fff;
  z-index: 1;
  max-height: 300px;
  overflow: scroll;
  padding: 30px 10px 20px;
  border-radius: 20px 20px 0 0;
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.175em 0.5em,
    rgba(2, 8, 20, 0.08) 0px 0.085em;
  border-top: 1px solid #f2f2f2;
`;

export const OptionsMobile = ({ isVisble, children }) => {
  if (!isVisble) {
    return null;
  }

  return ReactDOM.createPortal(
    <Wrapper>{children}</Wrapper>,
    document.getElementById("options")
  );
};
