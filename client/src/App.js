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
import { ItemProvider } from "./utils/ItemContext";
import { UserProvider, UserConsumer } from "./utils/UserContext";
import { ShopProvider } from "./utils/ShopContext";

function App() {

  return (
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
              <ShopProvider>
                <UserConsumer>
                  {
                    value => {
                      return value.isLoggedIn ? <Admin /> : <Redirect to="/admin-login" />
                    }
                  }
                </UserConsumer>
              </ShopProvider>
            </Route>
            <Route path="/admin/shop-add">
              <ShopProvider>
                <UserConsumer>
                  {
                    value => {
                      return value.isLoggedIn ? <AddShop /> : <Redirect to="/admin" />
                    }
                  }
                </UserConsumer>
              </ShopProvider>
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </ItemProvider>
  );
}

export default App;
