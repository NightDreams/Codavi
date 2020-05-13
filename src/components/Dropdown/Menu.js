/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrow-left.svg";
import ReactCountryFlag from "react-country-flag";

// Mock
import { countryAmerica } from "../../api";

export const Menu = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

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

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          {children}
          <DropdownItem goToMenu="america">America</DropdownItem>
          <DropdownItem goToMenu="animals">Africa</DropdownItem>
          <DropdownItem goToMenu="animals">Asia</DropdownItem>
          <DropdownItem goToMenu="animals">Europa</DropdownItem>
          <DropdownItem goToMenu="animals">Oceania</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "america"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
            <p style={{ fontWeight: "600" }}>Continentes</p>
          </DropdownItem>
          {countryAmerica.map(({ key, name, code }) => (
            <Link
              key={key}
              to={`/country/${code}`}
              onClick={() => addRecent(key, name, code)}
            >
              <DropdownItem>
                {" "}
                <ReactCountryFlag
                  countryCode={code}
                  svg
                  style={{ marginRight: "7px", borderRadius: "20px" }}
                />{" "}
                {name}
              </DropdownItem>
            </Link>
          ))}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
            <p style={{ fontWeight: "600" }}>Continentes</p>
          </DropdownItem>
          <DropdownItem>Kangaroo</DropdownItem>
          <DropdownItem>Frog</DropdownItem>
          <DropdownItem>Horse?</DropdownItem>
          <DropdownItem>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
