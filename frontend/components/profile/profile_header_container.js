import ProfileHeader from "./profile_header";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return({
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchUser:(userId) => dispatch(fetchUser(userId)),
        otherForm:(modal) => dispatch(openModal(modal)),
        updateUser:(user) => dispatch(updateUser(user))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileHeader))