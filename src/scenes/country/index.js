/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../../icons/more-horizontal.svg";
import { useCountryFlag } from "../../utils/hooks/useCountryFlag";

const TitleCountry = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: #50c7d2;
  letter-spacing: 1.1px;
`;

const Separation = styled.hr`
  border-top: 1px solid #f2f2f2;
  width: 100%;
  margin-bottom: 1em;
`;

const AboutSection = styled.h1`
  margin: 0 0 1em 0;
  @media screen and (max-width: 576px) {
    font-size: 23px;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const IconMore = styled.span`
  display: inline-flex;
  padding: 7px;
  border-radius: 29px;
  margin-bottom: 7px;
  cursor: pointer;
  &:hover {
    background: #50c7d214;
  }
`;

export const CountryDetails = ({
  match: {
    params: { countryCode },
  },
}) => {
  const countryName = useCountryFlag(countryCode);
  return (
    <Fragment>
      <IconMore>
        <More />
      </IconMore>
      <TitleCountry>{countryName}</TitleCountry>
      <AboutSection>Camas y precauciones</AboutSection>
      <Separation />
      <Div>
        <div>
          <h4>Camas disponibles</h4>
        </div>
        <div>
          <h4>Precauciones</h4>
        </div>
      </Div>
    </Fragment>
  );
};
