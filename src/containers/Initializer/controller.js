import { connect } from "react-redux";
import { checkAuthState } from "../../store/actions";
import Initializer from "./Initializer";

const mapDispatchToProps = (dispatch) => ({
    checkAuthState: () => dispatch(checkAuthState()),
});

export default connect(null, mapDispatchToProps)(Initializer);
