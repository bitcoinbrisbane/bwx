import React from "react";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../pages/Home";
import { FetchHorses } from "../components/FetchHorses";
import { FetchMeet } from "../components/FetchMeet";
import { FetchRace } from "../components/FetchRace";
import { BetSlip } from "../components/BetSlip";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Router = () => (
  <ReactRouter history={history}>
    <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/horses" component={FetchHorses} />
    <Route path="/race/:id" component={FetchRace} />
    <Route path="/meet/:id" component={FetchMeet} />
    <Route path="/betslip" component={BetSlip} />
    </Layout>
  </ReactRouter>
);

export default Router;