import { connect } from "react-redux";
import Checkout from "./Checkout";

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    price: state.totalPrice,
});

export default connect(mapStateToProps)(Checkout);
