import React from 'react';
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
import { ItemProvider } from "./utils/ItemContext";
import { UserProvider, UserConsumer } from "./utils/UserContext";
import { ArtProvider } from "./utils/ArtContext";

function App() {

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
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/admin-login">
                <UserConsumer>
                  {
                    value => {
                      return value.isLoggedIn ? <Redirect to="/admin" /> : <Login />
                    }
                  }
                </UserConsumer>
              </Route>
              <Route exact path="/admin">
                <UserConsumer>
                  {
                    value => {
                      return value.isLoggedIn ? <Admin /> : <Redirect to="/admin-login" />
                    }
                  }
                </UserConsumer>
              </Route>
              <Route path="/admin/shop-add">
                <UserConsumer>
                  {
                    value => {
                      return value.isLoggedIn ? <AddShop /> : <Redirect to="/admin" />
                    }
                  }
                </UserConsumer>
              </Route>
              <Route path="/admin/shop-view">
                <UserConsumer>
                  {
                    value => {
                      return value.isLoggedIn ? <ViewShop /> : <Redirect to="/admin" />
                    }
                  }
                </UserConsumer>
              </Route>
            </Switch>
          </Router>
        </UserProvider>
      </ItemProvider>
    </ArtProvider>
  );
}

export default App;
