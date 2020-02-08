import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => {
  return (
    <Auxiliary>
      <Toolbar />
      <main className={classes.content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
