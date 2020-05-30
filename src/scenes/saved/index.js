/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, useState } from "react";
import { BedCard } from "../../components/Bed-card/index";
import { Div } from "../../components/CardList/styles";

import { NotSaved } from "../../components/NotSaved";

// Translation
import { useTranslation } from "react-i18next";

export const Saved = () => {
  const { t } = useTranslation();
  const getSaveCards = JSON.parse(localStorage.getItem("saveCard")) || [];

  const [savedCountries, setSaved] = useState(getSaveCards);

  const removeItem = (_code) => {
    const filterCountries = getSaveCards.filter((data) => data.code !== _code);
    localStorage.setItem("saveCard", JSON.stringify(filterCountries));
    setSaved(filterCountries);
  };

  return (
    <Fragment>
      <h2 style={{ fontWeight: "500", marginBottom: "35px" }}>
        {t("global.mySaved")}
      </h2>
      {savedCountries.length === 0 ? (
        <NotSaved />
      ) : (
        <Div>
          {savedCountries.map((country) => (
            <BedCard saved {...country} removeItem={removeItem} />
          ))}
        </Div>
      )}
    </Fragment>
  );
};
