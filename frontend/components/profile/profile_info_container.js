import ProfileInfo from "./profile_info";
import { fetchUser, updateUser, fetchUsers} from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUserFriends } from "../../reducers/select_reducer";

const mapStateToProps = (state, ownProps) => {
    let sessionId = state.session.id
    let postAuthorId = state.session.id
    console.log(state.entities.user)
    return({
        users: state.entities.users,
        user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[sessionId],
        userFriends: state.entities.friends
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchUser:(userId) => dispatch(fetchUser(userId)),
        updateUser:(user) => dispatch(updateUser(user)),
        openModal:(modal) => dispatch(openModal(modal)),
        fetchUsers:() => dispatch(fetchUsers())
        
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileInfo))