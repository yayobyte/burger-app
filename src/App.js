import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/index';
import BurgerBuilder from "./containers/BurgerBuilder";
import Auth from "./containers/Auth";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Logout from "./containers/Auth/Logout";

const App = () => {
  return (
      <Layout>
          <Switch>
              <Route path="/" exact component={BurgerBuilder} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
          </Switch>
      </Layout>
  );
};

export default App;
