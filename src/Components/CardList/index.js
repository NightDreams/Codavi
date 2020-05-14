import React, { Fragment } from "react";
import { Div } from "./styles";
import { BedCard } from "../Bed-card/index";
export const CardList = () => {
  return (
    <Div>
      <BedCard />
      <BedCard />
      <BedCard />
    </Div>
  );
};
