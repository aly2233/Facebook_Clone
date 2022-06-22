import {connect} from 'react-redux';
import { createFriend, deleteFriend, deleteFriendRequest } from '../../actions/friend_actions';
import { receivedRequests, requestedFriends } from '../../reducers/selectors';
import FriendRequest from './friend_request';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        requestedUsers: receivedRequests(state.entities, state.session.id),
        users: state.entities.users,
        requestedFriends: requestedFriends(state.entities, state.session.id)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createFriend: (friend) => dispatch(createFriend(friend)),
        deleteFriendRequest: (friend) => dispatch(deleteFriendRequest(friend))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequest)