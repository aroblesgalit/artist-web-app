import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Videos from "./pages/Videos";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { ItemProvider } from "./utils/ItemContext";
import { UserProvider } from "./utils/UserContext";
import { ArtProvider } from "./utils/ArtContext";
import { AboutProvider } from "./utils/AboutContext";

function App() {
  return (
    <ArtProvider>
      <ItemProvider>
        <UserProvider>
          <AboutProvider>
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
                <Route path="/videos">
                  <Videos />
                </Route>
                <Route path="/admin-login">
                  <PublicRoute component={Login} />
                  {
                    // isLoggedIn ? <Redirect to="/admin" /> : <Login />
                  }
                </Route>
                <Route exact path="/admin">
                  <ProtectedRoute component={Admin} />
                  {
                    // isLoggedIn ? <Admin /> : <Redirect to="/admin-login" />
                  }
                </Route>
                <Route path="/admin/shop-add">
                  <ProtectedRoute component={AddShop} />
                  {
                    // isLoggedIn ? <AddShop /> : <Redirect to="/admin" />
                  }
                </Route>
                <Route path="/admin/shop-view">
                  <ProtectedRoute component={ViewShop} />
                  {
                    // isLoggedIn ? <ViewShop /> : <Redirect to="/admin" />
                  }
                </Route>
                <Route path="/admin/portfolio-view">
                  <ProtectedRoute component={ViewPortfolio} />
                  {
                    // isLoggedIn ? <ViewPortfolio /> : <Redirect to="/admin" />
                  }
                </Route>
                <Route path="/admin/portfolio-add">
                  <ProtectedRoute component={AddPortfolio} />
                  {
                    // isLoggedIn ? <AddPortfolio /> : <Redirect to="/admin" />
                  }
                </Route>
              </Switch>
            </Router>
          </AboutProvider>
        </UserProvider>
      </ItemProvider>
    </ArtProvider>
  );
}

export default App;
