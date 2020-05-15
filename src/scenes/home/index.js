/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { CardList } from "../../components/CardList/index";
export const Home = () => {
  return (
    <Fragment>
      <h2 style={{ fontWeight: "500", marginBottom: "35px" }}>
        Países con mas camas
      </h2>
      <CardList />
    </Fragment>
  );
};
