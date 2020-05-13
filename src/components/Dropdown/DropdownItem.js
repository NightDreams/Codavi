import React, { useState } from "react";

export const DropdownItem = ({ goToMenu, leftIcon, children }) => {
  const [activeMenu, setActiveMenu] = useState("main");

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
