/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-fragments */
/* eslint-disable prefer-const */
/* eslint-disable no-extend-native */
/* eslint-disable react/jsx-no-undef */
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as SavedIcon } from "../../icons/saved.svg";
import { ReactComponent as TimesIcon } from "../../icons/times.svg";

const IconSaved = styled(SavedIcon)`
  fill: #ccc !important;
  stroke: #ccc;
  cursor: pointer;
`;
const IconNotSaved = styled(SavedIcon)`
  fill: none;
  cursor: pointer;
`;

export const Saved = ({ code, saved, removeItem, estimatedBedsTotal }) => {
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

  //  Function for view country details
  const _removeItem = (_code) => {
    const getSaveCards = JSON.parse(localStorage.getItem("saveCard")) || [];
    const filterCountries = getSaveCards.filter((data) => data.code !== _code);
    localStorage.setItem("saveCard", JSON.stringify(filterCountries));
    setSaved(filterCountries);
  };

  return (
    <Fragment>
      {saved ? (
        <TimesIcon onClick={() => removeItem(code)} />
      ) : currentSaved ? (
        <IconSaved
          onClick={() => (removeItem ? removeItem(code) : _removeItem(code))}
        />
      ) : (
        <IconNotSaved onClick={saveBedCard} />
      )}
    </Fragment>
  );
};
