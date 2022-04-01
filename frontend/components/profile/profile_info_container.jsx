import ProfileInfo from "./profile_info";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    let sessionId = state.session.id
    return({
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        currentUser: state.entities.users[sessionId]
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchUser:(userId) => dispatch(fetchUser(userId)),
        updateUser:(user) => dispatch(updateUser(user)),
        openModal:(modal) => dispatch(openModal(modal))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileInfo))