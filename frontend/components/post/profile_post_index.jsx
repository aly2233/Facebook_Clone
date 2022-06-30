
import React from 'react';
import PostIndexUtilContainer from './post_index_util_container';


class ProfilePostIndex extends React.Component {
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
                this.props.posts.forEach( post => {
                    if (post.author_id === this.props.user.id || post.profile_id === this.props.user.id) {
                        allPosts.push(post) ;
                    };
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
export default ProfilePostIndex