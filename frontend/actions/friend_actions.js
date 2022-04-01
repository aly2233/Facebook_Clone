import * as FriendAPIUtil from '../utils/friend_api_util'

export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

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

export const createFriend = data => dispatch => {
    return (FriendAPIUtil.createFriend(data))
        .then((friend) => dispatch(receiveFriend(friend)))
}

export const deleteFriend = data => dispatch => {
    return (FriendAPIUtil.deleteFriend(data))
        .then((friend) => dispatch(removeFriend(friend)))
}