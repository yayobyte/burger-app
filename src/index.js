import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { burgerBuilderReducer, orderReducer, authReducer, userMessagesReducer } from './store/reducers/';
import Initializer from "./containers/Initializer";

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);
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
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
