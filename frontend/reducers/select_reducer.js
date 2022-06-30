export const getUserFriends = ({entities}, id) => {
    let userFriends = [];

    Object.values(entities.friends).forEach(friend => {
        if (friend.user_id == parseInt(id)) {
            userFriends.push(entities.friends[friend.friend_id]);
        };
    });


    return userFriends
}

export const getUserFriendships = ({entities}, id) => {

    let userFriendships = [];

    Object.values(entities.friendships).forEach( user => {
        if (user.user_id == parseInt(id)) {
            userFriendships.push(user);
        };
    });

    return userFriendships
    
}

export const getLikes = (state, item ) => {
    let likes = [];
    const type = item.author_id ? 'Post' : 'Comment';

    Object.values(state.entities.likes).forEach( like => {
        if ( like.likeable_id === item.id && like.likeable_type === type) {
            likes.push(like)
        }
    })

    return likes
}

export const receivedRequests = ({users, friendRequests}, id) => {
    let requestedUsers = [];

    Object.values(friendRequests).forEach( request => {
        if (request.requestee_id === id) {
            requestedUsers.push(users[request.requester_id]);
        };
    });

    return requestedUsers;
}


export const requestedFriends = ({friendRequests}, id) => {

    let requestedFriends = [];

    Object.values(friendRequests).forEach(request => {
        if (request.requestee_id === id) {
            requestedFriends.push(request);
        };
    });

    return requestedFriends
}