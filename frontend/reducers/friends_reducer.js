import { RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friend_actions";

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FRIEND:
            nextState[Object.keys(action.friend.friend)] = Object.values(action.friend.friend)[0]
            nextState[Object.keys(action.friendship.user)] = Object.values(action.friend.user)[0]
            return nextState;
        case REMOVE_FRIEND:
            delete nextState[Object.keys(action.friend.friend)]
            delete nextState[Object.keys(action.friend.user)]
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer;