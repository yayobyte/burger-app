import { connect } from "react-redux";
import Checkout from "./Checkout";
import { purchaseInit } from "./../../store/actions";

const mapStateToProps = ({ burgerBuilder : { ingredients, totalPrice, purchased, building }}) => ({
    ingredients: ingredients,
    price: totalPrice,
    purchased,
    building,
});

const mapDispatchToProps = (dispatch) => ({
    purchaseInit: () => dispatch(purchaseInit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
