import * as actions from "../../store/actions/";
import {connect} from "react-redux";
import BurgerBuilder from "./BurgerBuilder";
import withErrorHandler from "../../components/Hoc/withErrorHandler";

const {addIngredient, removeIngredient, initIngredients } = actions;

const mapStateToProps = ({ ingredients, totalPrice, error, loading }) => ({
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

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder));
