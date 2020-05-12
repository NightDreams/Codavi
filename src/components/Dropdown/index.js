/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../index.css";
import { ReactComponent as ArrowDownIcon } from "../../icons/arrow-down.svg";
import React from "react";
import { Menu } from "./Menu";

import { Item } from "./Item";

const Dropdown = () => {
  return (
    <Item icon={<ArrowDownIcon />}>
      <Menu />
    </Item>
  );
};

export default Dropdown;
