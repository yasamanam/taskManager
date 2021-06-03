import { Link, Route, Switch } from "react-router-dom";

import React from "react";
import TasksPage from "./pages/TasksPage";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={TasksPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
