import * as FriendRequestAPIUtil from '../utils/friend_request_api_util';

export const ADD_FRIEND_REQUEST = 'ADD_FRIEND_REQUEST';
export const DELETE_FRIEND_REQUEST = 'DELETE_FRIEND_REQUEST';

const addFriendRequest = request => {
    return ({
        type: ADD_FRIEND_REQUEST,
        request
    })
}

const deleteFriendRequest = request => {
    return ({
        type: DELETE_FRIEND_REQUEST,
        request
    })
}

export const createFriendRequest = data => dispatch => {
    return (FriendRequestAPIUtil.createFriendRequest(data))
        .then((request) => dispatch(addFriendRequest(request)))
}

export const removeFriendRequest = data => dispatch => {
    return (FriendRequestAPIUtil.deleteFriendRequest(data))
        .then(() => dispatch(deleteFriendRequest(data)))
}