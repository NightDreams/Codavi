/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import styled from "styled-components";

const TitleCountry = styled.p`
  margin-bottom: 0;
  text-transform: uppercase;
  color: #50c7d2;
  letter-spacing: 1.1px;
`;

const AboutSection = styled.h1`
  margin: 0;
  @media screen and (max-width: 576px) {
    font-size: 23px;
  }
`;

export const CountryDetails = ({
  match: {
    params: { countryCode },
  },
}) => {
  return (
    <Fragment>
      <TitleCountry>Colombia</TitleCountry>
      <AboutSection>Camas y precauciones</AboutSection>
    </Fragment>
  );
};
