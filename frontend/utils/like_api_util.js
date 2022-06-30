export const createLike = like => {
    return $.ajax({
        url: `/api/likes`,
        method: `POST`,
        data: {like}
    })
}

export const deleteLike = like => {
    return $.ajax({
        url: `/api/likes/${like.id}`,
        method: `DELETE`,
    })
}