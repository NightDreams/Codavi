/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

export const Item = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <span className="nav-item">
      Encuentra un país
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </span>
  );
};
