import * as CommentAPIUtil from "../utils/comment_api_util";

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const receiveAllComments = comments => {
    return({
        type: RECEIVE_ALL_COMMENTS,
        comments
    })
}

const receiveComment = comment => {
    return({
        type: RECEIVE_COMMENT,
        comment
    })
}

const removeComment = commentId => {
    return({
        type: REMOVE_COMMENT,
        commentId
    })
}

export const createComment = (comment) => dispatch => {
    return (CommentAPIUtil.createComment(comment))
        .then(newComment => dispatch(receiveComment(newComment)))
}

export const updateComment = (comment) => dispatch => {
    return (CommentAPIUtil.updateComment(comment))
        .then(newComment => dispatch(receiveComment(newComment)))
}

export const deleteComment = (comment) => dispatch => {
    return (CommentAPIUtil.deleteComment(comment.id))
        .then(() => dispatch(removeComment(comment)))
}