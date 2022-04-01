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