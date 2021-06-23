/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import styled from "styled-components";

const Skeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24em, 1fr));
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  margin-top: 4em;
  div {
    background: #80808017;
    width: 100%;
    height: 250px;
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

const NameSkeleton = styled.div`
  background: #80808017;
  width: 180px;
  height: 25px;
  border-radius: 7px;
  margin: 20px 0;
  animation: loading 0.9s infinite;
`;

const BedPrecautionSkeleotn = styled.div`
  background: #80808017;
  width: 380px;
  height: 25px;
  border-radius: 7px;
  animation: loading 0.9s infinite;
`;

export const SkeletonCountryDetails = () => {
  return (
    <Fragment>
      <div>
        <NameSkeleton />
        <BedPrecautionSkeleotn />
      </div>
      <Skeleton>
        <div />
        <div />
      </Skeleton>
    </Fragment>
  );
};
