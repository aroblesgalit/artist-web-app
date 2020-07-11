import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ItemDetail from "./pages/ItemDetail";
import Cart from "./pages/Cart";
import CartButton from "./components/CartButton";
import AddShop from "./pages/AddShop";
import ViewShop from "./pages/ViewShop";
import Portfolio from "./pages/Portfolio";
import ViewPortfolio from "./pages/ViewPortfolio";
import AddPortfolio from "./pages/AddPortfolio";
import About from "./pages/About";
import { ItemProvider } from "./utils/ItemContext";
import UserContext, { UserProvider } from "./utils/UserContext";
import { ArtProvider } from "./utils/ArtContext";

function App() {

  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [])

  return (
    <ArtProvider>
      <ItemProvider>
        <UserProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
                <CartButton />
              </Route>
              <Route exact path="/shop">
                <Shop />
                <CartButton />
              </Route>
              <Route path="/shop/:id">
                <ItemDetail />
                <CartButton />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/admin-login">
                {
                  isLoggedIn ? <Redirect to="/admin" /> : <Login />
                }
              </Route>
              <Route exact path="/admin">
                {
                  isLoggedIn ? <Admin /> : <Redirect to="/admin-login" />
                }
              </Route>
              <Route path="/admin/shop-add">
                {
                  isLoggedIn ? <AddShop /> : <Redirect to="/admin" />
                }
              </Route>
              <Route path="/admin/shop-view">
                {
                  isLoggedIn ? <ViewShop /> : <Redirect to="/admin" />
                }
              </Route>
              <Route path="/admin/portfolio-view">
                {
                  isLoggedIn ? <ViewPortfolio /> : <Redirect to="/admin" />
                }
              </Route>
              <Route path="/admin/portfolio-add">
                {
                  isLoggedIn ? <AddPortfolio /> : <Redirect to="/admin" />
                }
              </Route>
            </Switch>
          </Router>
        </UserProvider>
      </ItemProvider>
    </ArtProvider>
  );
}

export default App;
