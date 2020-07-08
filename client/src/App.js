import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ItemDetail from "./pages/ItemDetail";
import Cart from "./pages/Cart";
import { ItemProvider, ItemConsumer } from "./utils/ItemContext";

function App() {

  return (
    <ItemProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
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
          <Route path="/shop/:id">
              <ItemDetail />
          </Route>
          <Route path="/cart">
              <Cart />
          </Route>
        </Switch>
      </Router>
    </ItemProvider>
  );
}

export default App;
