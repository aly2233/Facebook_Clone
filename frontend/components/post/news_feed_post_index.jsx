import React from 'react';
import PostIndexUtilContainer from './post_index_util_container';

class NewsFeedPostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.postProfile.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.postProfile.id !== this.props.postProfile.id) {
            this.props.fetchPosts(this.props.postProfile.id)
        }
    }


    render() {

        let friends = Object.values(this.props.friends)
        let users = this.props.users
        let userFriends = [];
        userFriends.push(this.props.currentUser);
        

        friends.forEach((friend, i) => {
            if (friend.user_id == parseInt(this.props.user.id)) {
                userFriends.push(users[friend.friend_id]);
            };
        });


        if (this.props.posts.length === 0) {
            return null;
        } else {
            let allPosts = [];
            userFriends.forEach(user => {
                this.props.posts.forEach( post => {
                    if (post.author_id === user.id) {
                        allPosts.push(post);
                    };
                });
            });
    
            const postIndexList = allPosts.reverse().map(post => {
                
                return <PostIndexUtilContainer key={post.id} post={post} users={users}/>
            });



            return (
                <ul className='wallpost-index'>
                    {postIndexList}
                </ul>
            );
        };
    };
};

export default NewsFeedPostIndex