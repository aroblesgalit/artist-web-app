import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { ItemProvider, ItemConsumer } from "./utils/ItemContext";
import API from "./utils/API";

function App() {

  return (
    <ItemProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/admin-login">
            <ItemConsumer>
              {
                value => {
                  return value.isLoggedIn ? <Redirect to="/admin" /> : <Login />
                }
              }
            </ItemConsumer>
          </Route>
          <Route path="/admin">
            <ItemConsumer>
              {
                value => {
                  return value.isLoggedIn ? <Admin /> : <Redirect to="/admin-login" />
                }
              }
            </ItemConsumer>
          </Route>
        </Switch>
      </Router>
    </ItemProvider>
  );
}

export default App;
