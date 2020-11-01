import React from "react";
import { Router as ReactRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import HorseRacingPage from "../pages/HorseRacingPage";
import HorseRacePage from "../pages/HorseRacePage";
import HistoryPage from "../pages/HistoryPage";
import PayoutAddressPage from "../pages/PayoutAddressPage";
import BetSlipPage from "../pages/BetSlipPage";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const Router = () => (
  <ReactRouter history={history}>
    <Route exact path="/" component={Home} />
    <Switch>
      <Route path="/horses/:mnemonic/:id" component={HorseRacePage} />
      <Route path="/horses/:mnemonic/" component={HorseRacePage} />
      <Route path="/horses" component={HorseRacingPage} />
      <Route path="/payoutaddress" component={PayoutAddressPage} />
      <Route path="/betslip/:address" component={BetSlipPage} />
      <Route path="/history" component={HistoryPage} />
    </Switch>
    
  </ReactRouter>
);

export default Router;