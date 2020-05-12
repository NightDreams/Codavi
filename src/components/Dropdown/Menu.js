/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrow-left.svg";
import ReactCountryFlag from "react-country-flag";

// Mock
import { countryAmerica } from "../../api";

export const Menu = () => {
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
          <DropdownItem goToMenu="africa">Africa</DropdownItem>
          <DropdownItem goToMenu="animals">America</DropdownItem>
          <DropdownItem goToMenu="animals">Asia</DropdownItem>
          <DropdownItem goToMenu="animals">Europa</DropdownItem>
          <DropdownItem goToMenu="animals">Oceania</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "africa"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
            <p>Continentes</p>
          </DropdownItem>
          {countryAmerica.map(({ key, name, code }) => (
            <Link key={key} to={`/country/${code}`}>
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
            <h3>Continentes</h3>
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
