import Login from "./Login";
import { login } from "../../store/actions";
import reactReduxConnector from "../../helpers/reactReduxConnector";

const mapStateToProps = ({ auth: { loading, successMessage, error } }) => ({
    loading,
    successMessage,
    error,
});
const mapDispatchToProps = (dispatch) => ({
    login: (email, password, method) => dispatch(login(email, password, method))
});

export default reactReduxConnector(mapStateToProps, mapDispatchToProps)(Login);
