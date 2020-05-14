import React from "react";
import { Card, Grid, Rows, Name, Data, Total, Flag, Menu, General, Icono,Pais, Filtros} from "./styles";
import More from "../../icons/more-vertical.svg";
export const BedCard = () => {
  return (
    <Grid>
    <Card>
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
          <li>Acute</li>
          <li>Icu</li>
          <li>Otras</li>
          <li>Psychiatric</li>
        </Rows>
        <Rows>
          <Filtros>Tipo de cama</Filtros>
          <li>6000</li>
          <li>500</li>
          <li>909</li>
          <li>674</li>
        </Rows>
      </Data>
    </Card>
    </Grid>

  );
};
