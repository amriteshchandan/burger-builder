import React, { Component } from "react";
import Layout from "../src/hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <BurgerBuilder />;
      </div>
    );
  }
}

export default App;
