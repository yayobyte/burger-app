import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../store/actions";

const mapStateToProps = ({ login }) => ({ login });
const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
