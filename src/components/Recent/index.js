/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DropdownItem } from "../Dropdown/DropdownItem";

const Title = styled.h4`
  text-align: left;
  font-weight: 500;
  padding-left: 21px;
  color: #50c7d2;
  margin: 0 0 4px 0;
  font-size: 15px;
`;

const Separation = styled.hr`
  border-top: 1px solid #f2f2f2;
  width: 90%;
`;

export const Recent = () => {
  const recentCountry = JSON.parse(localStorage.getItem("recent")) || [];

  return (
    <Fragment>
      {recentCountry.length > 0 && (
        <Fragment>
          <Title>Recientes</Title>
          {recentCountry.map(({ key, name, code }) => (
            <Link key={key} to={`/country/${code}`}>
              <DropdownItem>{name}</DropdownItem>
            </Link>
          ))}
          <Separation />
        </Fragment>
      )}
    </Fragment>
  );
};
