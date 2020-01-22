import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/Layout/index';
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";

const App = () => {
  return (
      <Layout>
          <Switch>
              <Route path="/" exact component={BurgerBuilder} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
          </Switch>
      </Layout>
  );
}

export default App;
