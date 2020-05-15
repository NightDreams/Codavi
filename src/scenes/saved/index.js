/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { CardList } from "../../components/CardList/index";
import { BedCard } from "../../components/Bed-card/index";

export const Saved = () => {
  return (
    <Fragment>
      <h2 style={{ fontWeight: "500", marginBottom: "35px" }}>Mis guardados</h2>
      <CardList />
    </Fragment>
  );
};
