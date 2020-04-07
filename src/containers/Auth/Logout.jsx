import React, { useEffect } from "react";
import reactReduxConnector from "../../helpers/reactReduxConnector";
import { Redirect } from "react-router-dom";
import { logout } from "../../store/actions";

const Logout = ({ onLogout }) => {
    useEffect(() => {
        onLogout();
    }, []);
    return <Redirect to="/" />;
};

const mapStateToProps = ({ auth: { loading, error, successMessage } }) => ({
    loading,
    error,
    successMessage,
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch(logout()),
});

export default reactReduxConnector(mapStateToProps, mapDispatchToProps)(Logout);
