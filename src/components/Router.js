import React from "react";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import HorseRacingPage from "../pages/HorseRacingPage";
import { FetchMeet } from "../components/FetchMeet";
import { FetchRace } from "../components/FetchRace";
import { BetSlip } from "../components/BetSlip";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Router = () => (
  <ReactRouter history={history}>
    <Route exact path="/" component={Home} />
    <Route path="/horses" component={HorseRacingPage} />
    <Route path="/race/:id" component={FetchRace} />
    <Route path="/meet/:id" component={FetchMeet} />
    <Route path="/betslip" component={BetSlip} />
  </ReactRouter>
);

export default Router;