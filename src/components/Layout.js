import React from "react";
import Nav from "./Nav";

import "../cover.css";

const Layout = ({header, children, noHeader, activeTab}) => (
  <>
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
        <h3 className="masthead-brand">BWX</h3>
          {noHeader || header || <Nav activeTab={activeTab} />}
        </div>
      </header>
      <main role="main" className="inner cover">
        {children}
      </main>
    </div>
  </>
)

export default Layout;
