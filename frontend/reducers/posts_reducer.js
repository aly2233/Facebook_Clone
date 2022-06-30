import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";


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
        case RECEIVE_LIKE:
            if (action.like.likeable_type === 'Post') {
                nextState[action.like.likeable_id].likeIds.push(action.like.id)
            };
            return nextState;
        case REMOVE_LIKE:
            if (action.like.likeable_type === 'Post') {
                let newLikeIds = nextState[action.like.likeable_id].likeIds.filter(id => id !== action.like.id);
                nextState[action.like.likeable_id].likeIds = newLikeIds;
            };
        // case RECEIVE_COMMENT:
        //     let post = nextState[action.comment.post_id];
        //     if (!post.commentIds.includes(action.comment.id)) {
        //         post.commentIds.push(action.comment.id)
        //     };
        //     return nextState;
        // case REMOVE_COMMENT:
        //     let newCommentIds = nextState[action.comment.post_id].commentIds.filter(id => id !== action.comment.id)
        //     nextState[action.comment.post_id].commentIds = newCommentIds;
        //     return nextState;
        default:
            return state;
    }
}

export default postsReducer;