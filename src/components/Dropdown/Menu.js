/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { connect } from "react-redux";
import * as listCountriesActions from "../../actions/listCountriesActions";

import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { MenuSecondary } from "./MenuSecundary";

const Title = styled.h4`
  text-align: left;
  font-weight: 500;
  padding-left: 21px;
  color: #50c7d2;
  margin: 0 0 4px 0;
  font-size: 15px;
`;

const Menu = ({
  children,
  getAmericaCountries,
  listAmerica,
  getAfricaCountries,
  listAfrica,
  getAsiaCountries,
  listAsia,
  getEuropeCountries,
  listEurope,
  getOceaniaCountries,
  listOceania,
}) => {
  const [activeMenu, setActiveMenu] = useState("main");

  const renderCountriesAmerica = () =>
    !listAmerica.length && getAmericaCountries();

  const renderCountriesAfrica = () =>
    !listAfrica.length && getAfricaCountries();

  const renderCountriesAsia = () => !listAsia.length && getAsiaCountries();

  const renderCountriesEurope = () =>
    !listEurope.length && getEuropeCountries();

  const renderCountriesOceania = () =>
    !listOceania.length && getOceaniaCountries();

  const DropdownItem = ({ goToMenu, leftIcon, children }) => {
    return (
      <a
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{leftIcon}</span>
        {children}
      </a>
    );
  };

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="menu">
          {children}
          <Title>Continentes</Title>
          <span onClick={renderCountriesAmerica}>
            <DropdownItem goToMenu="america">America</DropdownItem>
          </span>
          <span onClick={renderCountriesAfrica}>
            <DropdownItem goToMenu="africa">Africa</DropdownItem>
          </span>
          <span onClick={renderCountriesAsia}>
            <DropdownItem goToMenu="asia">Asia</DropdownItem>
          </span>
          <span onClick={renderCountriesEurope}>
            <DropdownItem goToMenu="europe">Europa</DropdownItem>
          </span>
          <span onClick={renderCountriesOceania}>
            <DropdownItem goToMenu="oceania">Oceania</DropdownItem>
          </span>
        </div>
      </CSSTransition>

      <MenuSecondary
        countryActiveMenu="america"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        listCountriesContinent={listAmerica}
      />

      <MenuSecondary
        countryActiveMenu="africa"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        listCountriesContinent={listAfrica}
      />

      <MenuSecondary
        countryActiveMenu="asia"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        listCountriesContinent={listAsia}
      />

      <MenuSecondary
        countryActiveMenu="europe"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        listCountriesContinent={listEurope}
      />

      <MenuSecondary
        countryActiveMenu="oceania"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        listCountriesContinent={listOceania}
      />
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.listCountriesReducer;
};

const mapDispatchToProps = {
  ...listCountriesActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
