/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-fragments */
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import * as countriesDetailsReducer from "../../actions/countriesDetailsActions";

import { BedCard } from "../../components/Bed-card/index";
import { Div } from "../../components/CardList/styles";

// Feedback
import { SkeletonCards } from "../../utils/feedback/SkeletonCards";
import { Fatal } from "../../utils/feedback/Fatal";

const Home = ({
  getMostPopulation,
  listCountriesMostPopulation,
  loading,
  error,
}) => {
  useEffect(() => {
    !listCountriesMostPopulation.length && getMostPopulation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h2 style={{ fontWeight: "500", marginBottom: "35px" }}>
        Países con mas camas
      </h2>
      {error && <Fatal />}
      {loading ? (
        <SkeletonCards />
      ) : (
        <Div>
          {listCountriesMostPopulation.map((country) => (
            <BedCard key={country._id} {...country} />
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
