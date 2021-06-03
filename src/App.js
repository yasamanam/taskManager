import { Link, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import MainHeader from "./components/MainHeader";
import NotFound from "./pages/NotFound";
import React from "react";
import TasksPage from "./pages/TasksPage";

const App = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <Switch>
        <Route path="/" exact component={TasksPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
