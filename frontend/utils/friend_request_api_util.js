export const createFriendRequest = request => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: `POST`,
        data: { request }
    })
}

export const deleteFriendRequest = request => {
    return $.ajax({
        url: `/api/friend_requests/${request.id}`,
        method: `DELETE`,
        data: { request }
    })
}