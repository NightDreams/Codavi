import React from "react";
import { Div, Rows, Pais, Data, Total } from "./styles";
export const BedCard = () => {
  return (
    <Div>
      <Pais>Pais</Pais>
      <Data>
        <Rows>
          <Total>
            <p>Totales</p>
          </Total>
          <p>Acute</p>
          <p>Icu</p>
          <p>Otras</p>
          <p>Psychiatric</p>
        </Rows>
        <Rows>
          <p>9099</p>
          <p>6000</p>
          <p>500</p>
          <p>909</p>
          <p>674</p>
        </Rows>
        <Rows>
          <p></p>
          <p>12%</p>
          <p>23%</p>
          <p>23%</p>
          <p>40%</p>
        </Rows>
      </Data>
    </Div>
  );
};
