// This factory is intended to add an Hoc to handle errors and show spinner
import {connect} from "react-redux";
import { withUserMessages } from "../components/Hoc";

export default (mapStateToProps,mapDispatchToProps) => {
    return (Component, stateSlice) => {
        return connect(mapStateToProps, mapDispatchToProps)(withUserMessages(Component, stateSlice));
    }
};
