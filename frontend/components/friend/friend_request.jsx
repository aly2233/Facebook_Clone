
import React from 'react';
import FriendRequestItem from './friend_request_item';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const requestList = this.props.requestedUsers.map( user => {
            return <FriendRequestItem
                key={user.id}
                user={user}
                deleteFriendRequest={this.props.deleteFriendRequest}
                createFriend={this.props.createFriend}
                requestedFriends={this.props.requestedFriends}
            />
        })

        return (
            <ul className='request-index'>
                {this.props.requestedUsers.length > 0 ? requestList : <li>You have no new friend requests</li>}
            </ul>
        );
    }
}

export default FriendRequest;