import React from 'react';
import ProfileInfoContainer from './profile_info_container';
import ProfileHeaderContainer from './profile_header_container';
import PostCreateContainer from '../post/post_create_container';
import ProfilePostIndexContainer from '../post/profile_post_index_container';


class Profile extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchAllFriends();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(){
        window.scrollTo(0, 0)
    }

    render(){
        let users = Object.values(this.props.users)
        return(
            <div className='profile-page'>
                <div className='profile-top-container'>
                    <ProfileHeaderContainer/>
                </div>
                <div className="profile-bottom-container">
                    <div className="profile-left-container">
                        {users.length > 1 && <ProfileInfoContainer/>}
                    </div>
                    <div className="profile-right-container">
                        <div className="profile-create-post">
                            <PostCreateContainer/>
                        </div>
                        <div className="profile-all-post-container">
                            <div className='profile-post-intro-container'>
                                <h3>Posts</h3>
                             </div>
                            {users.length > 1 && <ProfilePostIndexContainer/>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;