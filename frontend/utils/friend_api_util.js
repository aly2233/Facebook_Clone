export const createFriend = friend => {
    return $.ajax({
        url: `/api/friends`,
        method: `POST`,
        data: friend
    })
}

export const deleteFriend = friend => {
    return $.ajax({
        url: `/api/friends/${friend.id}`,
        method: `DELETE`,
        data: { friend }
    })
}

export const createFriendRequest = friend_request => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: `POST`,
        data: {friend_request}
    })
}

export const deleteFriendRequest = request => {
    return $.ajax({
        url: `/api/friend_requests/${request.id}`,
        method: `DELETE`,
        data: {request}
    })
}

export const receiveAllFriends = () => {
    return $.ajax({
        method: "GET",
        url: `/api/friends`
    })
}