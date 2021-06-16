import "./assets/sass/app.scss";

import { Link, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import AboutPage from "./pages/AboutPage";
import ExpensePage from "./pages/ExpensePage";
import Login from "./pages/LoginPage";
import MainHeader from "./components/MainHeader";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./ProtectedRoute";
import React from "react";
import TaskPage from "./pages/TaskPage";
import TasksPage from "./pages/TasksPage";
import { ThemeProvider } from "./context/theme/ThemeContext";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider>
        <ToastContainer />
        <MainHeader />

        <Switch>
          <Route path="/" exact render={(props) => <TasksPage {...props} />} />
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/expenses" exact component={ExpensePage} />
          <Route path="/task/:id" exact component={TaskPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
