import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { ItemProvider } from "./utils/ItemContext";
import API from "./utils/API";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    API.getUserData()
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(err => {
        setIsLoggedIn(false);
      })
  }, [])

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
            {
              isLoggedIn ? <Redirect to="/admin" /> : <Login />
            }
          </Route>
          <Route path="/admin">
            {
              isLoggedIn ? <Admin /> : <Redirect to="/admin-login" />
            }
          </Route>
        </Switch>
      </Router>
    </ItemProvider>
  );
}

export default App;
