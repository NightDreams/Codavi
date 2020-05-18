/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { CardList } from "../../components/CardList/index";
import { BedCard } from "../../components/Bed-card/index";
import { Div } from "../../components/CardList/styles";

export const Saved = () => {
  const getSaveCards = JSON.parse(localStorage.getItem("saveCard")) || [];

  return (
    <Fragment>
      <h2 style={{ fontWeight: "500", marginBottom: "35px" }}>Mis guardados</h2>

      {getSaveCards.map((country) => (
        <BedCard {...country} />
      ))}
    </Fragment>
  );
};
