/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useCountryFlag } from "../../utils/hooks/useCountryFlag";
import { request } from "graphql-request";
import { Rows, Data, Filtros } from "../../components/Bed-card/styles";
import { SkeletonCountryDetails } from "../../utils/feedback/SkeletonCountryDetails";
import { ReactComponent as TableIcon } from "../../icons/list.svg";
import { ReactComponent as ChartIcon } from "../../icons/chart.svg";
import Chart from "react-google-charts";
import { Saved } from "../../components/Bed-card/Saved";

// Media Query
import { useMediaQuery } from "react-responsive";

const TitleCountry = styled.p`
  margin: 0;
  text-transform: uppercase;
  color: #50c7d2;
  letter-spacing: 1.1px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Separation = styled.hr`
  border-top: 1px solid #f2f2f2;
  width: 100%;
  margin-bottom: 1em;
`;

const AboutSection = styled.h1`
  margin: 0 0 1em 0;
  @media screen and (max-width: 576px) {
    font-size: 21px;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  @media only screen and (max-width: 920px) {
    grid-template-columns: 100%;
  }
`;

const ViewOptions = styled.ul`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 23px;
  li {
    display: inline-block;
    cursor: pointer;
    &:last-child {
      margin-left: 5px;
    }
    svg {
      width: 19px;
    }
  }
`;

const TitleView = styled.small`
  position: relative;
  top: -7px;
  margin-right: 10px;
`;

const Restriction = styled.div`
  margin: 10px 0;
  padding-bottom: 15px;
  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
  small {
    color: #50c7d2;
    text-transform: uppercase;
  }
  p {
    font-size: 14px;
  }
`;

const IconSaved = styled.span`
  cursor: pointer;
  color: #898989;
  svg {
    width: 20px;
  }
  ${(props) =>
    !props.mobile &&
    css`
      position: absolute;
      right: 6em;
      top: 8.4em;
      svg {
        width: 24px;
      }
    `};
`;

const Leyenda = styled.small`
  float: right;
  color: #4c4c4c;
  padding-top: 7px;
`;

export const CountryDetails = ({
  match: {
    params: { countryCode },
  },
}) => {
  const isMobileAndIpad = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const query = `query get($code: String!) {
      getCountry(code: $code) {
        _id
        code
        lat
        lng
        bedsTotal
        bedsAverage
        populationAverage
        estimatedBedsTotal
        estimatedBedsAverage
        typebed{
          type
          total
          percentage
          population
          estimatedForPopulation
          source
          sourceUrl
          year
        }
        restrictions{
          dateStart
          description
          keywords
        }
      }
    }`;

  const countryName = useCountryFlag(countryCode);
  const [dataCountry, setData] = useState({});

  useEffect(() => {
    request("https://app-backend-graphql.herokuapp.com/", query, {
      code: `${countryCode}`,
    }).then((data) => setData(data.getCountry));
    // setData({});
  }, [dataCountry]);

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
  ];
  const options = {
    pieHole: 0.4,
    is3D: false,
  };

  const [view, setView] = useState("table");
  const changeView = (view) => {
    setView(view);
  };

  return (
    <Fragment>
      {console.log(dataCountry)}
      {Object.entries(dataCountry).length === 0 ? (
        <SkeletonCountryDetails />
      ) : (
        <Fragment>
          <div>
            <IconSaved mobile={isMobileAndIpad ? true : false}>
              <Saved
                code={countryCode}
                estimatedBedsTotal={dataCountry.estimatedBedsTotal}
              />
            </IconSaved>
            <TitleCountry>{countryName}</TitleCountry>
            <AboutSection>Camas y restricciones</AboutSection>
          </div>
          <Separation />
          <Div>
            <div style={{ position: "relative" }}>
              <h4>Camas disponibles</h4>
              <ViewOptions>
                <TitleView>Vista:</TitleView>
                <li onClick={() => changeView("table")}>
                  {" "}
                  <TableIcon
                    style={
                      view === "table"
                        ? { color: "#50c7d2" }
                        : { color: "#ccc" }
                    }
                  />{" "}
                </li>
                <li onClick={() => changeView("chart")}>
                  {" "}
                  <ChartIcon
                    style={
                      view === "chart"
                        ? { color: "#50c7d2" }
                        : { color: "#ccc" }
                    }
                  />{" "}
                </li>
              </ViewOptions>
              {view === "table" ? (
                <Fragment>
                  <Data>
                    <Rows>
                      <Filtros>Tipo de cama</Filtros>
                      {dataCountry.typebed.map(({ type }) => (
                        <>
                          <li key={type}>{type}</li>
                        </>
                      ))}
                    </Rows>
                    <Rows>
                      <Filtros>Numero</Filtros>
                      {dataCountry.typebed.map(({ population }) => (
                        <li key={population}>
                          {new Intl.NumberFormat().format(
                            Math.round(population)
                          )}
                        </li>
                      ))}
                    </Rows>
                  </Data>
                  <Leyenda>* Datos con una escala de 1000</Leyenda>
                </Fragment>
              ) : (
                <Chart
                  chartType="PieChart"
                  width="100%"
                  height="300px"
                  data={data}
                  options={options}
                />
              )}
            </div>
            <div>
              <h4>Restricciones</h4>
              <div>
                {!dataCountry.restrictions.length
                  ? "No hay restricciones displonibles para este país"
                  : dataCountry.restrictions.map(
                      ({ dateStart, description }) => (
                        <Restriction>
                          <small>{dateStart}</small>
                          <p>{description}</p>
                        </Restriction>
                      )
                    )}
              </div>
            </div>
          </Div>
        </Fragment>
      )}
    </Fragment>
  );
};
