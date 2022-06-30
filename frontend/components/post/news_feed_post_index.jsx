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
        if (this.props.posts.length === 0) {
            return null;
        } else {
            let allPosts = [];
            this.props.userFriends.push(this.props.currentUser);
            this.props.userFriends.forEach( user => {
                this.props.posts.forEach( post => {
                    if (post.author_id === user.id) {
                        allPosts.push(post);
                    };
                });
            });
    
            const postIndexList = allPosts.reverse().map(post => {
                return <PostIndexUtilContainer key={post.id} post={post} />
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