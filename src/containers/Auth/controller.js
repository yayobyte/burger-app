import { connect } from "react-redux";
import Login from "./Login";
import { login } from "../../store/actions";

const mapStateToProps = ({ login }) => ({ login });
const mapDispatchToProps = (dispatch) => ({
    login: (body) => dispatch(login(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
