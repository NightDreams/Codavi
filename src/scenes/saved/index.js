import React, {Fragment} from "react";
import { BedCard } from "../../components/Bed-card";
import { Div} from "./styles";

export const Saved = () => {
  return (

    <Fragment>
    <h1>Saved View</h1>
    <Div>
        <BedCard />
        <BedCard />
        <BedCard />
        <BedCard />
        <BedCard />
        <BedCard />
      </Div>
  </Fragment>
  );
};
