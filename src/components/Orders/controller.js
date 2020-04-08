import reactReduxConnector from "../../helpers/reactReduxConnector";
import Orders from "./Orders";
import { getOrders } from "./../../store/actions";

const mapStateToProps = ({ order : { loading, orders }, auth: { idToken, localId }}) => ({
    loading,
    orders,
    idToken,
    userId: localId,
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: (token, userId) => dispatch(getOrders(token, userId)),
});
export default reactReduxConnector(mapStateToProps, mapDispatchToProps)(Orders);
