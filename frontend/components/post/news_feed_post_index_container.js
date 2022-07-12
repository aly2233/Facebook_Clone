import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePost, fetchPosts } from '../../actions/post_actions';
import { getUserFriends } from '../../reducers/select_reducer';
import NewsFeedPostIndex from './news_feed_post_index';

const mapStateToProps = (state, ownProps) => {
    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        friends: state.entities.friends,
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        postProfile: state.entities.users[postProfileId],
        user: state.entities.users[postProfileId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchPosts: (pageId) => dispatch(fetchPosts(pageId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsFeedPostIndex))