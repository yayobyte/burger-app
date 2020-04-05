import { connect } from "react-redux";
import Orders from "./Orders";
import withErrorHandler from "../Hoc/withUserMessages";
import instance from "../../server";
import { getOrders } from "./../../store/actions";

const mapStateToProps = ({ order : { loading, orders }}) => ({
    loading,
    orders,
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(getOrders()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, instance));
