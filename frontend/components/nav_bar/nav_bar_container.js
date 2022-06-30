import NavBar from "./nav_bar";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = ({ session, entities: { users }}) => {
    return ({
        currentUser: users[session.id],
        users: Object.values(users)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        logout: () => dispatch(logout),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)