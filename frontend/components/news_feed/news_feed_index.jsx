import React from 'react';
import PostCreateContainer from '../post/post_create_container';
import NewsFeedPostIndexContainer from '../post/news_feed_post_index_container';

class NewsFeedIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        let posts = this.props.posts;
        let users = Object.values(this.props.users);
        return (
            <div className='newsfeed-main'>
                <div className='news-feed-post-form-container'>
                    <PostCreateContainer />
                    {posts.length > 1 && users.length > 1 && <NewsFeedPostIndexContainer/>}
                </div>
            </div>
        );
    }
}

export default NewsFeedIndex;