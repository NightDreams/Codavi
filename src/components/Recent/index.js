/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DropdownItem } from "../Dropdown/DropdownItem";

// Translation
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const recentCountry = JSON.parse(localStorage.getItem("recent")) || [];

  return (
    <Fragment>
      {recentCountry.length > 0 && (
        <Fragment>
          <Title>{t("global.recent")}</Title>
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
