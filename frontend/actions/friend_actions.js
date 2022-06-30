import * as FriendAPIUtil from '../utils/friend_api_util'

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';
export const RECEIVE_ALL_FRIENDS = 'RECEIVE_ALL_FRIENDS';

const receiveFriend = friend => {
    return({
        type: RECEIVE_FRIEND,
        friend
    })
}

const removeFriend = friend => {
    return({
        type: REMOVE_FRIEND,
        friend
    })
}

const receiveFriendRequest = friendRequest => {
    return ({
        type: ACCEPT_FRIEND_REQUEST,
        friendRequest
    })
}

const removeFriendRequest = friendRequest => {
    return ({
        type: REMOVE_FRIEND_REQUEST,
        friendRequest
    })
}

const receiveAllFriends = (friends) => {
    return ({
        type: RECEIVE_ALL_FRIENDS,
        friends
    })
}
export const createFriend = data => dispatch => {
    return (FriendAPIUtil.createFriend(data))
        .then((friend) => dispatch(receiveFriend(friend)))
}

export const deleteFriend = data => dispatch => {
    return (FriendAPIUtil.deleteFriend(data))
        .then((friend) => dispatch(removeFriend(friend)))
}

export const createFriendRequest = data => dispatch => {
    return (FriendAPIUtil.createFriendRequest(data))
        .then( (newRequest) => dispatch(receiveFriendRequest(newRequest)))
}

export const deleteFriendRequest = data => dispatch => {
    return (FriendAPIUtil.deleteFriendRequest(data))
        .then( () => dispatch(removeFriendRequest(data)))
}

export const fetchAllFriends = () => dispatch => (
    FriendAPIUtil.receiveAllFriends()
        .then((friends) => dispatch(receiveAllFriends(friends)))
)
