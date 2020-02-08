import {ADD_INGREDIENTS, REMOVE_INGREDIENT} from "../../store/actions";
import {connect} from "react-redux";
import BurgerBuilder from "./BurgerBuilder";
import withErrorHandler from "../../components/Hoc/withErrorHandler";

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
    addIngredient: (ingredientName) => dispatch({
        type: ADD_INGREDIENTS, ingredientName,
    }),
    deleteIngredient: (ingredientName) => dispatch({
        type: REMOVE_INGREDIENT, ingredientName,
    }),
});

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder));
