import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer, burgerBuilderReducer, orderReducer, userMessagesReducer } from "../store/reducers";
import thunk from "redux-thunk";

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

export default store;
