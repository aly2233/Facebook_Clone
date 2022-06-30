import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createFriendRequest, deleteFriend } from '../../actions/friend_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { getUserFriendships } from '../../reducers/selectors';
import FriendForm from './friend_form';


const mSTP = (state, ownProps) => {
    return({
        currentUser: state.entities.users[state.session.id],
        postProfile: state.entities.users[ownProps.match.params.userId],
        currentUserFriends: getUserFriendships(state, state.session.id),
        friendRequests: Object.values(state.entities.friendRequests)
    })
};

const mDTP = dispatch => {
    return({
        deleteFriend: (friend) => dispatch(deleteFriend(friend)),
        requestFriend: (friend) => dispatch(createFriendRequest(friend)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    })
};

export default withRouter(connect(mSTP, mDTP)(FriendForm));