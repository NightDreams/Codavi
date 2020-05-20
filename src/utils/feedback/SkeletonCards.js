import React from "react";
import styled from "styled-components";

const Skeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17em, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  div {
    background: #80808017;
    width: 100%;
    height: 120px;
    border-radius: 10px;
    animation: loading 0.9s infinite;
  }
  @keyframes loading {
    0% {
      opacity: 0.35;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.35;
    }
  }
`;

export const SkeletonCards = () => {
  return (
    <Skeleton>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Skeleton>
  );
};
