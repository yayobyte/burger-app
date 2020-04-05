import * as actions from "../../store/actions/";
import BurgerBuilder from "./BurgerBuilder";
import reactReduxConnector from "../../helpers/reactReduxConnector";

const {addIngredient, removeIngredient, initIngredients } = actions;

const mapStateToProps = ({ burgerBuilder: { ingredients, totalPrice, error, loading, successMessage }}) => ({
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

export default reactReduxConnector(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
