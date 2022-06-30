import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.like.id]
            return nextState;
        case RECEIVE_ALL_POSTS:
            return Object.assign(nextState, action.payload.likes)
        default:
            return state;
    }
}

export default likesReducer;