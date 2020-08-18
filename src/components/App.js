import React from "react";
import Router from "./Router";
import "./App.css";
import { SWRConfig } from "swr";
import bwx from "../apis/bwx";

const swrConfig = {
  fetcher: url => bwx.secure.get(url).then(res => res.data)
};

const App = () => (
  <SWRConfig value={swrConfig}>
    <Router />
  </SWRConfig>
);

export default App;
