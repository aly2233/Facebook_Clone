import * as UserAPIUtil from "../utils/user_api_util";

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (payload) => ({
    type: RECEIVE_ALL_USERS,
    payload
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
        .then((users) => dispatch(receiveAllUsers(users)))
);

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
);

