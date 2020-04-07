import React, { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuthState } from "../../store/actions";

const Initializer = ({ checkAuthState }) => {
    useEffect(() => {
        checkAuthState();
    }, []);
    return null;
};

const mapDispatchToProps = (dispatch) => ({
    checkAuthState: () => dispatch(checkAuthState()),
});

export default connect(null, mapDispatchToProps)(Initializer);
