import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";


const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign(nextState, action.payload)
        case RECEIVE_POST:
            var object = Object.values(action.post)
            nextState[action['post'].post.id] = object[0];
        case REMOVE_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;