/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, useEffect, useState } from "react";
import { request } from "graphql-request";
import { BedCard } from "../../components/Bed-card/index";
import { Div } from "../../components/CardList/styles";
import { SkeletonCards } from "../../utils/feedback/SkeletonCards";

export const Home = () => {
  const query = ` 
  {
    getCountrys{
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
        population
      }
      restrictions{
        dateStart
      }
    }
  }
  `;

  const [dataCountries, setData] = useState([]);
  useEffect(() => {
    request("https://app-backend-graphql.herokuapp.com/", query).then((data) =>
      setData(data.getCountrys.slice(0, 20))
    );
  }, []);

  return (
    <Fragment>
      <h2 style={{ fontWeight: "500", marginBottom: "35px" }}>
        Países con mas camas
      </h2>
      {dataCountries.length === 0 ? (
        <SkeletonCards />
      ) : (
        <Div>
          {dataCountries.map((country) => (
            <BedCard key={country._id} {...country} />
          ))}
        </Div>
      )}
    </Fragment>
  );
};
