import React from "react";
import { Div, Rows, Name, Data, Total, Flag, Menu, General, Icono,Pais, Filtros} from "./styles";
import More from "../../icons/more-vertical.svg";
export const BedCard = () => {
  return (
    <Div>
      <Menu>
        <Pais>
          <Flag></Flag>
          <General>
            <Name>Pais</Name>
            <Total>110 camas</Total>
          </General>
        </Pais>
        <Icono>
          <img src={More} alt="Options" />
        </Icono>
      </Menu>
      <Data>
        <Rows>
          <Filtros>Tipo de cama</Filtros>
          <p>Acute</p>
          <p>Icu</p>
          <p>Otras</p>
          <p>Psychiatric</p>
        </Rows>
        <Rows>
          <Filtros>Tipo de cama</Filtros>
          <p>6000</p>
          <p>500</p>
          <p>909</p>
          <p>674</p>
        </Rows>
      </Data>
    </Div>
  );
};
