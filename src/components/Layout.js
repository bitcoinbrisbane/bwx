import React from "react";
import Nav from "./Nav";

import "../cover.css";

const Layout = ({header, children, noHeader, activeTab}) => (
  <>
    <header className="masthead mb-auto">
      <div className="inner">
      <h3 className="masthead-brand">BWX</h3>
        {noHeader || header || <Nav activeTab={activeTab} />}
      </div>
    </header>
    <main role="main" className="inner cover">
      <div>{children}</div>
    </main>
  </>
)

export default Layout;
