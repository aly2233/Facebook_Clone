import { connect } from 'react-redux';
import NewsFeedIndex from './news_feed_index';
// import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => ({
    // fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedIndex);