/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { BedCard } from "../../components/Bed-card";
import { Div} from "./styles";
export const Home = () => {
  return (
    <Div>
      <BedCard />
      <BedCard />
      <BedCard />
    </Div>
  );
};
