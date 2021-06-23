/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { Div } from "./styles";
import { BedCard } from "../Bed-card/index";
import { countries } from "../../api";
export const CardList = () => {
  return (
    <Fragment>
      <Div>
        {countries.map((c) => (
          <BedCard key={c._id} {...c} />
        ))}
      </Div>
    </Fragment>
  );
};
