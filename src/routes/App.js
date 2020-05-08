/* eslint-disable react/jsx-fragments */
import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "../styles";
import { Home } from "../scenes/home";
import { CountryDetails } from "../scenes/country";
import { Saved } from "../scenes/saved";
import { NotFound } from "../scenes/NotFound";

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Fragment>{/* header (nav) Yayo */}</Fragment>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:countryCode" component={CountryDetails} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
