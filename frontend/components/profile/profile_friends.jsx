import React from 'react';
import { Link } from 'react-router-dom'

class FriendsInfo extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        let displayFriends;
        if (Object.keys(this.props.friend).length === 0) {
            displayFriends = null;
        } else { 
            displayFriends = this.props.friend.map(friend => {
                return (
                    <div className='friend-tile' key={friend.id}><Link to={`/users/${friend.id}`}>
                        <div className=''><img className='friend-tile-photo' src={friend.profilePicture}/></div>
                        <div className='friend-tile-name'><font>{friend.first_name} {friend.last_name}</font></div>
                    </Link></div>
                )
            })
        }

        return (
            <div className='profile-friends-container'>
                <h3>Friends 
                    <div className='profile-friends-icon'></div>
                    <p className='dot'>•</p>
                    <p className='friend-count'>{this.props.friends.length}</p>
                </h3>

                <div className='friends-display'>
                    {displayFriends}
                </div>
            </div>
        )
    }
}

export default FriendsInfo