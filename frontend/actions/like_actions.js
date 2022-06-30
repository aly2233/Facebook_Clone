import * as LikeAPIUtil from '../utils/like_api_util'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

export const receiveLike = like => {
    return({
        type: RECEIVE_LIKE,
        like
    })
}

export const removeLike = like => {
    return({
        type: REMOVE_LIKE,
        like
    })
}

export const createLike = like => dispatch => {
    return (LikeAPIUtil.createLike(like))
        .then((like) => dispatch(receiveLike(like)))
}

export const deleteLike = like => dispatch => {
    return (LikeAPIUtil.deleteLike(like))
        .then(() => dispatch(removeLike(like)))
}