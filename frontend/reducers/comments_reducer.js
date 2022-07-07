import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign(nextState, action.payload.comments)
        case RECEIVE_LIKE:
            if (action.like.likeable_type === 'Comment') {
                nextState[action.like.likeable_id].likeIds.push(action.like.id)
            }
            return nextState;
        case REMOVE_LIKE:
            if (action.like.likeable_type === 'Comment') {
                let newLikeIds = nextState[action.like.likeable_id].likeIds.filter(id => id !== action.like.id);
                nextState[action.like.likeable_id].likeIds = newLikeIds;
            }
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.comment.id]
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;