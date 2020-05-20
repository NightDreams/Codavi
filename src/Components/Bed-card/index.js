/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card, Grid, Name, Total, Menu, General, Icon, Pais } from "./styles";
import { ReactComponent as SavedIcon } from "../../icons/saved.svg";
import { ReactComponent as TimesIcon } from "../../icons/times.svg";
import ReactCountryFlag from "react-country-flag";
import { useCountryFlag } from "../../utils/hooks/useCountryFlag";

const CountryFlag = styled(ReactCountryFlag)`
  width: 2em !important;
  height: 2em !important;
  margin-right: 7px;
  border-radius: 50px;
  margin-top: 7px;
`;

export const BedCard = ({
  code,
  saved,
  typebed,
  removeItem,
  estimatedBedsTotal,
}) => {
  const getSaveCards = JSON.parse(localStorage.getItem("saveCard")) || [];
  const countryName = useCountryFlag(code);
  const saveBedCard = () => {
    localStorage.setItem(
      "saveCard",
      JSON.stringify([...getSaveCards, { code, typebed }])
    );
  };

  return (
    <Grid>
      <Card>
        <Menu>
          <Pais>
            <Link to={`/country/${code}`}>
              <CountryFlag countryCode={code} svg />
            </Link>
            <General>
              <Link to={`/country/${code}`}>
                <Name>{countryName}</Name>
              </Link>
              <Total>
                {new Intl.NumberFormat().format(Math.round(estimatedBedsTotal))}{" "}
                camas
              </Total>
            </General>
          </Pais>
          <Icon>
            {saved ? (
              <TimesIcon onClick={() => removeItem(code)} />
            ) : (
              <SavedIcon onClick={saveBedCard} />
            )}
          </Icon>
        </Menu>
      </Card>
    </Grid>
  );
};
