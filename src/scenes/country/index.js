import React from "react";

export const CountryDetails = ({
  match: {
    params: { countryCode },
  },
}) => {
  return <h1>CountryDetails {countryCode}</h1>;
};
