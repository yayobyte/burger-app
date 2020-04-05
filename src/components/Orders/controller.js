import reactReduxConnector from "../../helpers/reactReduxConnector";
import Orders from "./Orders";
import { getOrders } from "./../../store/actions";

const mapStateToProps = ({ order : { loading, orders }}) => ({
    loading,
    orders,
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(getOrders()),
});
export default reactReduxConnector(mapStateToProps, mapDispatchToProps)(Orders);
