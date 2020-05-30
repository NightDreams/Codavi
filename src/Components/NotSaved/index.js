/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { BedCard } from "../../components/Bed-card/index";
import { Div } from "../../components/CardList/styles";

export const NotSaved = () => {
  const query = ` 
    {
        getCountrys{
            code
            lat
            lng
            bedsTotal
            bedsAverage
            populationAverage
            estimatedBedsTotal
            estimatedBedsAverage
        }
    }
    `;

  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await request(
      "https://app-backend-graphql.herokuapp.com/",
      query
    );

    const suggestions = [];

    for (let i = 0; i < 8; i++) {
      const newSetCountry = response.getCountrys
        .sort(() => Math.random() - Math.random())
        .slice(0, 1);
      suggestions.push(newSetCountry[0]);
    }

    setData(suggestions);
    console.log(suggestions);
  }, []);


  console.log(data);
  return (
    <Div>
      {data.map(( data ) => (
        <BedCard key={data._id} {...data}/>
      ))}
    </Div>
  );
};
