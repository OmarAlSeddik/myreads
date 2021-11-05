import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </HashRouter>
  );
};

export default App;
