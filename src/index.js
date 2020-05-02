import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import styled from "styled-components";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { burgerBuilderReducer, orderReducer, authReducer, userMessagesReducer } from './store/reducers/';
import Initializer from "./containers/Initializer";

const AppContainer = styled.div`
  --app-width: 500px;
  --brown: #703B09;
  max-width: var(--app-width);
  margin: auto;
  
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (min-width: 500px) {
    border: 2px solid var(--brown);
  }
`;

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const composeEnhancers = process.env.NODE_ENV === 'development' ? composer : (null || compose);
const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer,
    userMessages: userMessagesReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ),
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Initializer />
            <AppContainer>
                <App />
            </AppContainer>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
