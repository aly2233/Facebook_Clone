import ProfileHeader from "./profile_header";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return({
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users
    })
}

const mapDispatchToProps = dispatch => {
    return({
        fetchUser:(userId) => dispatch(fetchUser(userId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileHeader))