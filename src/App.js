import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import TodoPage from "./pages/Todo";
import Template from "./components/Template";
import PrivateRoute from "./components/PrivateRoute";
import fakeAuth from "./fakeAuth";

function App() {
  return (
    <Template>
      <Switch>
        <Route
          exact
          path="/"
          render={({ location }) =>
            fakeAuth.isAuthenticated ? (
              <Redirect
                to={{
                  pathname: "/todo",
                  state: { from: location }
                }}
              />
            ) : (
              <HomePage />
            )
          }
        />
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/todo">
          <TodoPage />
        </PrivateRoute>
      </Switch>
    </Template>
  );
}

export default App;
