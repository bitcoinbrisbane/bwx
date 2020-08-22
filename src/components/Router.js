import React from "react";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import HorseRacingPage from "../pages/HorseRacingPage";
import HorseRacePage from "../pages/HorseRacePage";
import { FetchMeet } from "../components/FetchMeet";
import { BetSlip } from "../components/BetSlip";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Router = () => (
  <ReactRouter history={history}>
    <Route exact path="/" component={Home} />
    <Switch>
      <Route path="/horses/:mnemonic/:id" component={HorseRacePage} />
      <Route path="/horses" component={HorseRacingPage} />

    </Switch>

    <Route path="/meet/:id" component={FetchMeet} />
    <Route path="/betslip" component={BetSlip} />
  </ReactRouter>
);

export default Router;