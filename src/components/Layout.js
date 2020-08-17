import React, { Component } from "react";
import { Container } from "reactstrap";
//import { NavMenu } from "./NavMenu";
import Nav from "./Nav";

const Layout = ({header, children, noHeader, activeTab}) => (
  <>
    <header>{noHeader || header || <Nav activeTab={activeTab} />}</header>
    <main>
      <div>{children}</div>
    </main>
  </>
)

export default Layout;
