import React from "react";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import HorseRacingPage from "../pages/HorseRacingPage";
import HorseRacePage from "../pages/HorseRacePage";
import { BetSlip } from "./BetSlip";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Router = () => (
  <ReactRouter history={history}>
    <Route exact path="/" component={Home} />
    <Switch>
      <Route path="/horses/:mnemonic/:id" component={HorseRacePage} />
      <Route path="/horses" component={HorseRacingPage} />
      <Route path="/betslip" component={BetSlip} />
    </Switch>
    
  </ReactRouter>
);

export default Router;