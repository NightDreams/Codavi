/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable no-extend-native */
/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card, Grid, Name, Total, Menu, General, Icon, Pais } from "./styles";
import ReactCountryFlag from "react-country-flag";
import { useCountryFlag } from "../../utils/hooks/useCountryFlag";

import { Saved } from "./Saved";

// Translation
import { useTranslation } from "react-i18next";

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
  _bedsTotal,
  removeItem,
  estimatedBedsTotal,
}) => {
  const { t } = useTranslation();
  const countryName = useCountryFlag(code);

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
                {_bedsTotal
                  ? new Intl.NumberFormat().format(Math.round(_bedsTotal))
                  : new Intl.NumberFormat().format(
                      Math.round(estimatedBedsTotal)
                    )}{" "}
                {t("global.beds")}
              </Total>
            </General>
          </Pais>
          <Icon>
            <Saved
              code={code}
              saved={saved}
              _bedsTotal={_bedsTotal}
              removeItem={removeItem}
              estimatedBedsTotal={estimatedBedsTotal}
            />
          </Icon>
        </Menu>
      </Card>
    </Grid>
  );
};
