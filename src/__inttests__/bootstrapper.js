import { Provider } from "react-redux";
import store from "../config/store";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "../config/theme";
import Initializer from "../containers/Initializer";
import AppStyles from "../config/appStyles";
import App from "../App";
import React from "react";
import {render} from "@testing-library/react";

const MainApp = () => (
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Initializer />
                <AppStyles>
                    <App />
                </AppStyles>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
);

const renderApp = () => {
    const { getByTestId, queryAllByTestId, getAllByText, container } = render(<MainApp />);
    return {
        getByTestId,
        queryAllByTestId,
        getAllByText,
        container,
    };
};

export default renderApp;
