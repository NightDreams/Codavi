/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../../styles";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as FilterIcon } from "../../icons/filter.svg";
import { ReactComponent as SavedIcon } from "../../icons/saved.svg";
import { ReactComponent as TimesIcon } from "../../icons/times.svg";
import { ReactComponent as GlobeIcon } from "../../icons/globe.svg";
import { ReactComponent as CheckIcon } from "../../icons/check.svg";
import logoCodavi from "../../assets/logo_codavi.svg";
import ReactCountryFlag from "react-country-flag";

// Dropdown
import Dropdown from "../../components/Dropdown";
import Menu from "../../components/Dropdown/Menu";
import { Recent } from "../../components/Recent";
import { OptionsMobile } from "../../components/OptionsMobile";

// Media Query
import { useMediaQuery } from "react-responsive";

// Translation
import { useTranslation } from "react-i18next";

const Navegation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  height: 65px;
  padding: 0 60px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
  @media screen and (max-width: 576px) {
    height: 50px;
    padding: 0 30px;
  }
`;

const Logo = styled.img`
  width: 115px;
  @media screen and (max-width: 576px) {
    width: 100px;
    margin-top: 7px;
  }
`;

const ItemsNav = styled.div`
  text-align: right;
`;

const ButtonMenu = styled.button`
  position: fixed;
  display: flex;
  z-index: 1;
  right: 24px;
  bottom: 26px;
  padding: 15px;
  background: #fff;
  border: none;
  border-radius: 30px;
  box-shadow: 0 64px 18px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;

const ButtonHideOptions = styled.div`
  position: absolute;
  right: 30px;
  top: 16px;
  button > svg {
    color: grey;
    width: 18px;
    height: 18px;
  }
`;

// Mobile
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
`;

const MenuDrop = styled.div`
  ${(props) =>
    props.isMobile
      ? css`
          padding: 10px 5px;
        `
      : css`
          position: absolute;
          top: 62px;
          right: 60px;
          width: 250px;
          max-height: 310px;
          background-color: #fff;
          border-radius: var(--border-radius);
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          overflow: scroll;
          transition: height var(--speed) ease;
          z-index: 1;
          padding: 10px 5px;
        `}
`;

const CheckSpan = styled.span`
  position: absolute;
  right: 19px;
  vertical-align: middle;
  display: flex;
  color: grey;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const DropdownItem = ({ children }) => {
  return (
    <a className="menu-item">
      <span className="icon-button" />
      {children}
    </a>
  );
};

const Header = ({ location }) => {
  const { t, i18n } = useTranslation();

  const isMobileAndIpad = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const [isVisble, setVisible] = useState(false);
  const showOptions = () => {
    setVisible(!isVisble);
  };

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setVisible(false);
    setOpen(false);
    setIsShowFilters(false);
  }, [location]);

  const [isShowFilters, setIsShowFilters] = useState(false);
  const showFilters = () => {
    setIsShowFilters(true);
    setOpen(true);
  };

  const [openLan, setOpenLan] = useState(false);

  const changelanguage = (lang) => {
    i18n.changeLanguage(lang);
    setOpenLan(false);
  };

  return (
    <Fragment>
      <Navegation>
        <div>
          <Link to="/">
            <Logo src={logoCodavi} alt="Codavi" />
          </Link>
        </div>
        {isMobileAndIpad ? (
          <ButtonMenu onClick={showOptions}>
            <MenuIcon />
          </ButtonMenu>
        ) : (
          <ItemsNav>
            <Link to="/saved">
              <Button style={{ marginRight: "10px" }} type="primary">
                <span>
                  {" "}
                  <SavedIcon />
                </span>{" "}
                {t("global.saved")}
              </Button>
            </Link>
            <Dropdown>
              <Button
                type="primary"
                onClick={() => {
                  setOpen(!open);
                  setOpenLan(false);
                }}
              >
                <span>
                  {" "}
                  <FilterIcon />
                </span>{" "}
                {t("global.filters")}
              </Button>
              {open && (
                <Menu>
                  <Recent />
                </Menu>
              )}
            </Dropdown>
            <Dropdown>
              <Button
                onClick={() => {
                  setOpenLan(!openLan);
                  setOpen(false);
                }}
              >
                <span>
                  <GlobeIcon />
                </span>
              </Button>
              {openLan && (
                <MenuDrop>
                  <span onClick={() => changelanguage("es")}>
                    <DropdownItem>
                      {" "}
                      <ReactCountryFlag
                        countryCode="MX"
                        style={{
                          fontSize: "1em",
                          margin: "3px 5px 0 0",
                        }}
                      />{" "}
                      Español
                      {i18n.languages[0] === "es" && (
                        <CheckSpan>
                          <CheckIcon />
                        </CheckSpan>
                      )}
                    </DropdownItem>
                  </span>
                  <span onClick={() => changelanguage("en")}>
                    <DropdownItem>
                      <ReactCountryFlag
                        countryCode="US"
                        style={{
                          fontSize: "1em",
                          margin: "3px 5px 0 0",
                        }}
                      />
                      English
                      {i18n.languages[0] === "en" && (
                        <CheckSpan>
                          <CheckIcon />
                        </CheckSpan>
                      )}
                    </DropdownItem>
                  </span>
                </MenuDrop>
              )}
            </Dropdown>
          </ItemsNav>
        )}
      </Navegation>
      <OptionsMobile isVisble={isVisble}>
        <div>
          <ButtonHideOptions>
            <button onClick={showOptions}>
              <TimesIcon />
            </button>
          </ButtonHideOptions>
          <div>
            {isShowFilters ? (
              open && (
                <Menu mobile>
                  <Recent />
                </Menu>
              )
            ) : (
              <Content>
                <div>
                  <Link to="/saved">
                    {" "}
                    <span>Guardados</span>{" "}
                  </Link>
                </div>
                <div>
                  <span onClick={showFilters}>Filtros</span>
                </div>
              </Content>
            )}
          </div>
        </div>
      </OptionsMobile>
    </Fragment>
  );
};

export default withRouter(Header);
