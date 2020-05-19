/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Card,
  Grid,
  Rows,
  Name,
  Data,
  Total,
  Menu,
  General,
  Icon,
  Pais,
  Filtros,
  Separation,
} from "./styles";
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

export const BedCard = ({ code, saved, typebed, removeItem }) => {
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
              <Total>110 camas</Total>
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
        <Separation />
        <Data>
          <Rows>
            <Filtros>Tipo de cama</Filtros>
            {typebed.map((b) => (
              <Fragment>
                <li>{b.type}</li>
              </Fragment>
            ))}
          </Rows>
          <Rows>
            <Filtros>Numero</Filtros>
            {typebed.map((b) => (
              <Fragment>
                <li>{b.population}</li>
              </Fragment>
            ))}
          </Rows>
        </Data>
      </Card>
    </Grid>
  );
};
