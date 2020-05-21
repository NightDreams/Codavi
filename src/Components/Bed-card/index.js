/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable no-extend-native */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
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

const IconSaved = styled(SavedIcon)`
  fill: #ccc !important;
  stroke: #ccc;
  cursor: pointer;
`;
const IconNotSaved = styled(SavedIcon)`
  fill: none;
  cursor: pointer;
`;

export const BedCard = ({
  code,
  saved,
  _bedsTotal,
  removeItem,
  estimatedBedsTotal,
}) => {
  Array.prototype.diff = function (arr2) {
    let ret = [];
    this.sort();
    arr2.sort();
    for (let i = 0; i < this.length; i += 1) {
      if (arr2.indexOf(this[i]) > -1) {
        ret.push(this[i]);
      }
    }
    return ret;
  };

  const [currentSaved, setSaved] = useState(false);

  useEffect(() => {
    const array1 = new Array(code);
    const getSavedCard = JSON.parse(localStorage.getItem("saveCard"));
    const array2 = getSavedCard && getSavedCard.map((c) => c.code);
    const diffCode = array1.diff(array2 || []);
    if (diffCode[0] === code) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  });

  const countryName = useCountryFlag(code);

  const saveBedCard = () => {
    const getSaveCards = JSON.parse(localStorage.getItem("saveCard")) || [];
    const newCountry = {
      code,
      _bedsTotal: estimatedBedsTotal,
    };

    localStorage.setItem(
      "saveCard",
      JSON.stringify([newCountry, ...getSaveCards])
    );
    setSaved(!currentSaved);
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
                {_bedsTotal
                  ? new Intl.NumberFormat().format(Math.round(_bedsTotal))
                  : new Intl.NumberFormat().format(
                      Math.round(estimatedBedsTotal)
                    )}{" "}
                camas
              </Total>
            </General>
          </Pais>
          <Icon>
            {saved ? (
              <TimesIcon onClick={() => removeItem(code)} />
            ) : currentSaved ? (
              <IconSaved onClick={() => removeItem(code)} />
            ) : (
              <IconNotSaved onClick={saveBedCard} />
            )}
          </Icon>
        </Menu>
      </Card>
    </Grid>
  );
};
