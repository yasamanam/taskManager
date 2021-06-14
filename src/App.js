import { Link, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ExpensePage from "./pages/ExpensePage";
import MainHeader from "./components/MainHeader";
import NotFound from "./pages/NotFound";
import React from "react";
import TaskPage from "./pages/TaskPage";
import TasksPage from "./pages/TasksPage";
import { ThemeProvider } from "./context/theme/ThemeContext";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <MainHeader />

        <Switch>
          <Route path="/" exact component={TasksPage} />
          <Route path="/expenses" exact component={ExpensePage} />
          <Route path="/task/:id" exact component={TaskPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
