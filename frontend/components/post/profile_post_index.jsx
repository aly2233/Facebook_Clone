
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
        if (!this.props.user) return <div>Loading</div>
        const postIndexList = this.props.posts.reverse().map( post => {
            return <PostIndexUtilContainer key={post.id} post={post} />
        })

        return(
            <ul className='wallpost-index'>
                {postIndexList}
            </ul>
        );
    }
}

export default ProfilePostIndex