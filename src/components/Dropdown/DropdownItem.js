/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export const DropdownItem = ({ goToMenu, leftIcon, children }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <a
      className="menu-item"
      onClick={() => goToMenu && setActiveMenu(goToMenu.toLowerCase())}
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
    </a>
  );
};
