// This factory is intended to add an Hoc to handle errors and show spinner
import {connect} from "react-redux";
import { withUserMessages } from "../components/Hoc";
import { removeErrorMessages } from "./../store/actions";

export default (mapStateToProps,mapDispatchToProps) => {
    const mapDispatch = (dispatch) => ({
        ...mapDispatchToProps(dispatch),
        removeMessages: () => dispatch(removeErrorMessages()),
    });
    const mapState = (state) => {
        const { error, successMessage } = state.userMessages;
        return ({
            ...mapStateToProps(state),
            error,
            successMessage,
        })
    };
    return (Component) => {
        return connect(mapState, mapDispatch)(withUserMessages(Component));
    }
};
