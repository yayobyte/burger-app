import * as actions from "../../store/actions/";
import {connect} from "react-redux";
import BurgerBuilder from "./BurgerBuilder";

const {addIngredient, removeIngredient, initIngredients } = actions;

const mapStateToProps = ({ burgerBuilder: { ingredients, totalPrice, error, loading }}) => ({
    ingredients,
    totalPrice,
    error,
    loading,
});

const mapDispatchToProps = (dispatch) => ({
    addIngredient: (ingredientName) => dispatch(addIngredient(ingredientName)),
    deleteIngredient: (ingredientName) => dispatch(removeIngredient(ingredientName)),
    initIngredients: () => dispatch(initIngredients()),
});

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
