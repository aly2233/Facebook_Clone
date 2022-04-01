import Profile from "./profile";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";

const mapStateToProps = (state) => {
    let sessionId = state.session.id
    
    return {
        users: state.entities.users,
        currentUser: state.entities.users[sessionId],
        user: state.entities.users[sessionId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);