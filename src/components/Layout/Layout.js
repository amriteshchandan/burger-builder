import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <Auxiliary>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
