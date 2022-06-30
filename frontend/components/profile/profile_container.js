import Profile from "./profile";
import { connect } from "react-redux";
import { fetchUser, fetchUsers, updateUser } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchAllFriends } from "../../actions/friend_actions";

const mapStateToProps = (state) => {
    let sessionId = state.session.id
    
    return {
        users: state.entities.users,
        currentUser: state.entities.users[sessionId],
        user: state.entities.users[sessionId],
        openModal: state.ui.modal
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()),
    openModal: (modal) => dispatch(openModal(modal)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchAllFriends: () => dispatch(fetchAllFriends())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);