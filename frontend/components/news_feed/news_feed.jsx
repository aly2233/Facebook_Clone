import React from 'react';
import NewsFeedBirthday from './news_feed_birthday';
import NewsFeedIndexContainer from './news_feed_index_container';
import NewsFeedLinks from './news_feed_links';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
        this.props.fetchPosts('all')
    }6
    render() {
        return (
            <div className='newsfeed-page'>
                <div className='newsfeed-container'>
                    <NewsFeedLinks currentUser={this.props.currentUser}/>

                    <NewsFeedIndexContainer />

                    <NewsFeedBirthday />

                </div>
            </div>
        );
    }
}

export default NewsFeed;