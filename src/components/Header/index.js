import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles";
import { ReactComponent as FilterIcon } from "../../icons/filter.svg";
import { ReactComponent as SavedIcon } from "../../icons/saved.svg";
import logoCodavi from "../../assets/logo_codavi.svg";

// Dropdown
import Dropdown from "../../components/Dropdown";
import { Menu } from "../../components/Dropdown/Menu";
import { Recent } from "../../components/Recent";

const Navegation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  height: 65px;
  align-items: center;
  padding: 0 60px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
`;

const Logo = styled.img`
  width: 115px;
`;

const ItemsNav = styled.div`
  text-align: right;
`;

const Header = ({ location }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Navegation>
      <div>
        <Link to="/">
          <Logo src={logoCodavi} alt="Codavi" />
        </Link>
      </div>
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
    </Navegation>
  );
};

export default withRouter(Header);
