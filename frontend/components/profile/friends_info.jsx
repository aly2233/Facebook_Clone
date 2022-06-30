import React from 'react';
import { Link } from 'react-router-dom'

class FriendsInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        
        let friends = Object.values(this.props.friends)
        let users = this.props.users
        let userFriends = [];


        friends.forEach((friend, i) => {
            if (friend.user_id == parseInt(this.props.user.id)) {
                userFriends.push(users[friend.friend_id]);
            };
        });

        let friendCount;
        if (userFriends.length === 1) {
            friendCount = <p className='friend-count'>{userFriends.length} Friend</p>
        } else {
            friendCount = <p className='friend-count'>{userFriends.length} Friends</p>
        }

        
        let displayFriends;
        if (userFriends.length === 0) {
            displayFriends = null;
        } else {
            displayFriends = friends.map((friend, i) => {
                if (friend.user_id === this.props.user.id) {
                    return (
                    <div className="friend-display-individual" key={friend.id}><Link style={{textDecoration: 'none'}} to={`/profile/${friend.friend_id}`}>
                        <div className='friend-image-container'><img className='friend-tile-photo' src={users[friend.friend_id].profilePicture}/></div>
                        <div className='friend-display-names'>{users[friend.friend_id].first_name} {users[friend.friend_id].last_name}</div>
                    </Link></div>
                    )
                   
                }
            })
        
        }

        return (
            <div className='profile-friends-container'>
                <h2>Friends 
                    <div className='profile-friends-icon'></div>
                    {friendCount}
                </h2>
                <div className='friends-display'>
                    {this.props.user && displayFriends}
                </div>
            </div>
        )
    }
}

export default FriendsInfo