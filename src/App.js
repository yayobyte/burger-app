import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Layout from './containers/Layout/index';
import BurgerBuilder from "./containers/BurgerBuilder";
import Auth from "./containers/Auth";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Logout from "./containers/Auth/Logout";

const App = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return (
            <Layout>
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        );
    }
    return (
      <Layout>
          <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/" exact component={BurgerBuilder} />
              <Redirect to="/" />
          </Switch>
      </Layout>
    );
};

const mapStateToProps = ({ auth: { idToken } }) => ({
    isAuthenticated: idToken !== null,
});

export default connect(mapStateToProps, null)(App);
