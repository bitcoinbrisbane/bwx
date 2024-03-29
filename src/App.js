import React from "react";
import Router from "./Router";
import "./App.css";
import { SWRConfig } from "swr";
import bwx from "./apis/bwx";

const swrConfig = {
  fetcher: url => bwx.secure.get(url).then(res => res.data),
  shouldRetryOnError: false,
  refreshInterval: 1000
};

const App = () => {
  return (
    <SWRConfig value={swrConfig}>
      <Router />
    </SWRConfig>
  );
}

export default App;
