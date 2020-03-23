import { connect } from "react-redux";
import Checkout from "./Checkout";

const mapStateToProps = ({ burgerBuilder : { ingredients, totalPrice }}) => ({
    ingredients: ingredients,
    price: totalPrice,
});

export default connect(mapStateToProps)(Checkout);
