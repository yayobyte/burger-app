import reactReduxConnector from "../../helpers/reactReduxConnector";
import Layout from "./Layout";

const mapStateToProps = ({ auth: { idToken }}) => ({
    isAuthenticated: idToken !== null,
});

const mapDispatchToProps = () => ({

});

export default reactReduxConnector(mapStateToProps, mapDispatchToProps)(Layout);
