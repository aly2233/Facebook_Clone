import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import NewsFeed from './news_feed';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchPosts: (pageId) => dispatch(fetchPosts(pageId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);