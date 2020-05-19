import React from "react";
import { ReactComponent as FatalIcon } from "../../icons/fatal.svg";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffb367;
  padding: 22px 20px;
  border-radius: 5px;
  background-color: #ffb3671c;
  width: 50%;
  margin: auto;
  text-align: center;
  span {
    vertical-align: sub;
    margin-right: 6px;
    svg {
      width: 22px;
    }
  }
`;

const Text = styled.h3`
  font-weight: 500;
`;

export const Fatal = () => {
  return (
    <Content>
      <Text>
        {" "}
        <span>
          <FatalIcon />
        </span>{" "}
        Algo salio mal, vuelva a intentarlo mas tarder
      </Text>
    </Content>
  );
};
