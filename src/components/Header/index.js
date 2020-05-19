/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as FilterIcon } from "../../icons/filter.svg";
import { ReactComponent as SavedIcon } from "../../icons/saved.svg";
import logoCodavi from "../../assets/logo_codavi.svg";

// Dropdown
import Dropdown from "../../components/Dropdown";
import Menu from "../../components/Dropdown/Menu";
import { Recent } from "../../components/Recent";

// Media Query
import { useMediaQuery } from "react-responsive";

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
  right: 24px;
  bottom: 26px;
  padding: 15px;
  background: #fff;
  border: none;
  border-radius: 30px;
  box-shadow: 0 64px 18px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
`;

const Header = ({ location }) => {
  const isMobileAndIpad = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Fragment>
      <Navegation>
        <div>
          <Link to="/">
            <Logo src={logoCodavi} alt="Codavi" />
          </Link>
        </div>
        {isMobileAndIpad ? (
          <ButtonMenu>
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
                Guardado
              </Button>
            </Link>
            <Dropdown>
              <Button type="primary" onClick={() => setOpen(!open)}>
                <span>
                  {" "}
                  <FilterIcon />
                </span>{" "}
                Filtros
              </Button>
              {open && (
                <Menu>
                  <Recent />
                </Menu>
              )}
            </Dropdown>
          </ItemsNav>
        )}
      </Navegation>
    </Fragment>
  );
};

export default withRouter(Header);
