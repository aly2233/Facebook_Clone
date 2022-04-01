import { ADD_FRIEND_REQUEST, DELETE_FRIEND_REQUEST } from "../actions/friend_request_actions";

const friendRequestsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case ADD_FRIEND_REQUEST:
            nextState[action.request] = action.request
            return nextState;
        case DELETE_FRIEND_REQUEST:
            delete nextState[action.request.id]
            return nextState;
        default:
            return state;
    }
}

export default friendRequestsReducer;