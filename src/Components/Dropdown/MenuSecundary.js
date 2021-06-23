/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as ArrowLeftIcon } from "../../icons/arrow-left.svg";

// Translation
import { useTranslation } from "react-i18next";

const Title = styled.p`
  font-weight: 600;
`;

export const MenuSecondary = ({
  countryActiveMenu,
  activeMenu,
  setActiveMenu,
  listCountriesContinent,
}) => {
  const { t } = useTranslation();
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
    <CSSTransition
      in={activeMenu === countryActiveMenu}
      timeout={500}
      classNames="menu-secondary"
      unmountOnExit
    >
      <div className="menu">
        <DropdownItem goToMenu="main" leftIcon={<ArrowLeftIcon />}>
          <Title>{t("global.continents")}</Title>
        </DropdownItem>
        {listCountriesContinent.map(({ alpha2Code, name, numericCode }) => (
          <Link
            key={numericCode}
            to={`/country/${alpha2Code.toLowerCase()}`}
            onClick={() =>
              addRecent(numericCode, name, alpha2Code.toLowerCase())
            }
          >
            <DropdownItem>{name}</DropdownItem>
          </Link>
        ))}
      </div>
    </CSSTransition>
  );
};
