/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrow-left.svg";
import ReactCountryFlag from "react-country-flag";
import { getCountriesAmerica } from "../../api/getCountriesAmerica";
import { getCountriesAfrica } from "../../api/getCountriesAfrica";
import { getCountriesAsia } from "../../api/getCountriesAsia";
import { getCountriesEurope } from "../../api/getCountriesEurope";

export const Menu = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  const [countriesAmericaList, setCountriesAmerica] = useState([]);
  const renderCountriesAmerica = () => {
    getCountriesAmerica().then((data) => setCountriesAmerica(data));
  };

  const [countriesAfricaList, setCountriesAfrica] = useState([]);
  const renderCountriesAfrica = () => {
    getCountriesAfrica().then((data) => setCountriesAfrica(data));
  };

  const [countriesAsiaList, setCountriesAsia] = useState([]);
  const renderCountriesAsia = () => {
    getCountriesAsia().then((data) => setCountriesAsia(data));
  };

  const [countriesEuropeList, setCountriesEurope] = useState([]);
  const renderCountriesEurope = () => {
    getCountriesEurope().then((data) => setCountriesEurope(data));
  };

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

  const addRecent = (key, name, code) => {
    const recentCountry = JSON.parse(localStorage.getItem("recent")) || [];

    // Validación para no agregar un pais repetido a recientes
    const keysArray = [];
    recentCountry.map((c) => keysArray.push(c.key));
    if (keysArray.includes(key)) {
      return false;
    }

    // Eliminar el ultimo item y agregar uno nuevo con un max de 3 items
    recentCountry.length > 2 && recentCountry.pop();
    const countryData = { key, name, code };
    localStorage.setItem(
      "recent",
      JSON.stringify([countryData, ...recentCountry])
    );
  };
  const Title = styled.h4`
    text-align: left;
    font-weight: 500;
    padding-left: 21px;
    color: #50c7d2;
    margin: 0 0 4px 0;
    font-size: 15px;
  `;

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
            <DropdownItem goToMenu="europa">Europa</DropdownItem>
          </span>
          {/* <DropdownItem goToMenu="animals">Oceania</DropdownItem> */}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "america"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
            <p style={{ fontWeight: "600" }}>Continentes</p>
          </DropdownItem>
          {countriesAmericaList.map(
            ({ alpha2Code, nativeName, numericCode }) => (
              <Link
                key={numericCode}
                to={`/country/${alpha2Code.toLowerCase()}`}
                onClick={() =>
                  addRecent(numericCode, nativeName, alpha2Code.toLowerCase())
                }
              >
                <DropdownItem>
                  {" "}
                  <ReactCountryFlag
                    countryCode={alpha2Code}
                    svg
                    style={{ marginRight: "7px", borderRadius: "20px" }}
                  />{" "}
                  {nativeName}
                </DropdownItem>
              </Link>
            )
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "africa"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
            <p style={{ fontWeight: "600" }}>Continentes</p>
          </DropdownItem>
          {countriesAfricaList.map(
            ({ alpha2Code, nativeName, numericCode }) => (
              <Link
                key={numericCode}
                to={`/country/${alpha2Code.toLowerCase()}`}
                onClick={() =>
                  addRecent(numericCode, nativeName, alpha2Code.toLowerCase())
                }
              >
                <DropdownItem>
                  {" "}
                  <ReactCountryFlag
                    countryCode={alpha2Code}
                    svg
                    style={{ marginRight: "7px", borderRadius: "20px" }}
                  />{" "}
                  {nativeName}
                </DropdownItem>
              </Link>
            )
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "asia"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
            <p style={{ fontWeight: "600" }}>Continentes</p>
          </DropdownItem>
          {countriesAsiaList.map(({ alpha2Code, nativeName, numericCode }) => (
            <Link
              key={numericCode}
              to={`/country/${alpha2Code.toLowerCase()}`}
              onClick={() =>
                addRecent(numericCode, nativeName, alpha2Code.toLowerCase())
              }
            >
              <DropdownItem>
                {" "}
                <ReactCountryFlag
                  countryCode={alpha2Code}
                  svg
                  style={{ marginRight: "7px", borderRadius: "20px" }}
                />{" "}
                {nativeName}
              </DropdownItem>
            </Link>
          ))}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "europa"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
            <p style={{ fontWeight: "600" }}>Continentes</p>
          </DropdownItem>
          {countriesEuropeList.map(
            ({ alpha2Code, nativeName, numericCode }) => (
              <Link
                key={numericCode}
                to={`/country/${alpha2Code.toLowerCase()}`}
                onClick={() =>
                  addRecent(numericCode, nativeName, alpha2Code.toLowerCase())
                }
              >
                <DropdownItem>
                  {" "}
                  <ReactCountryFlag
                    countryCode={alpha2Code}
                    svg
                    style={{ marginRight: "7px", borderRadius: "20px" }}
                  />{" "}
                  {nativeName}
                </DropdownItem>
              </Link>
            )
          )}
        </div>
      </CSSTransition>
    </div>
  );
};
