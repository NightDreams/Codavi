/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
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
import ReactCountryFlag from "react-country-flag";
import { useCountryFlag } from "../../utils/hooks/useCountryFlag";

const CountryFlag = styled(ReactCountryFlag)`
  width: 2em !important;
  height: 2em !important;
  margin-right: 7px;
  border-radius: 50px;
  margin-top: 7px;
`;

export const BedCard = ({ code, bedType }) => {
  const countryName = useCountryFlag(code);

  return (
    <Grid>
      <Card>
        <Menu>
          <Pais>
            <CountryFlag countryCode={code} svg />
            <General>
              <Name>{countryName}</Name>
              <Total>110 camas</Total>
            </General>
          </Pais>
          <Icon>
            <SavedIcon />
          </Icon>
        </Menu>
        <Separation />
        <Data>
          <Rows>
            <Filtros>Tipo de cama</Filtros>
            <li>Acute</li>
            <li>Icu</li>
            <li>Psychiatric</li>
            <li>Otras</li>
          </Rows>
          <Rows>
            <Filtros>Numero</Filtros>
            {bedType.map((b) => (
              <Fragment>
                <li>{b.acute}</li>
                <li>{b.icu}</li>
                <li>{b.psychiatric}</li>
                <li>{b.other}</li>
              </Fragment>
            ))}
          </Rows>
        </Data>
      </Card>
    </Grid>
  );
};
