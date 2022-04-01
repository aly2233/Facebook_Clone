import NavBar from "./nav_bar";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[ownProps.match.params.userId]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout)
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)