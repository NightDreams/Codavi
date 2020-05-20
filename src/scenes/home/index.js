/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as countriesDetailsReducer from "../../actions/countriesDetailsActions";

import { BedCard } from "../../components/Bed-card/index";
import { Div } from "../../components/CardList/styles";

// Feedback
import { SkeletonCards } from "../../utils/feedback/SkeletonCards";
import { Fatal } from "../../utils/feedback/Fatal";

import Bed from "../../assets/bed.png";

const Information = styled.div`
  background: #4487bb1c;
  padding: 15px 40px;
  margin-bottom: 3em;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 20px;
    color: #4487bb;
    font-weight: 500;
  }
`;

const Home = ({
  getMostPopulation,
  listCountriesMostPopulation,
  loading,
  error,
}) => {
  useEffect(() => {
    !listCountriesMostPopulation.length && getMostPopulation();
  }, []);

  const getSaveCards = JSON.parse(localStorage.getItem("saveCard")) || [];

  const [savedCountries, setSaved] = useState(getSaveCards);

  const removeItem = (_code) => {
    const filterCountries = getSaveCards.filter((data) => data.code !== _code);
    localStorage.setItem("saveCard", JSON.stringify(filterCountries));
    setSaved(filterCountries);
  };

  return (
    <Fragment>
      <Information>
        <div>
          <h2>
            Informate sobre el tipo y total de camas disponibles en el mundo
            para el COVID-19
          </h2>
        </div>
        <div>
          <img src={Bed} alt="" />
        </div>
      </Information>
      <h2 style={{ fontWeight: "500", marginBottom: "35px", fontSize: "21px" }}>
        Países con mas camas
      </h2>
      {/* {console.log(listCountriesMostPopulation.map((c) => c.code))} */}
      {error && <Fatal />}
      {loading ? (
        <SkeletonCards />
      ) : (
        <Div>
          {listCountriesMostPopulation.map((country) => (
            <BedCard key={country._id} {...country} removeItem={removeItem} />
          ))}
        </Div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.countriesDetailsReducer;
};

export default connect(mapStateToProps, countriesDetailsReducer)(Home);
