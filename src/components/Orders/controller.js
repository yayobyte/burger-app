import reactReduxConnector from "../../helpers/reactReduxConnector";
import Orders from "./Orders";
import { getOrders } from "./../../store/actions";

const mapStateToProps = ({ order : { loading, orders, error, successMessage }, auth: { idToken }}) => ({
    loading,
    error,
    successMessage,
    orders,
    idToken
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: (token) => dispatch(getOrders(token)),
});
export default reactReduxConnector(mapStateToProps, mapDispatchToProps)(Orders);
