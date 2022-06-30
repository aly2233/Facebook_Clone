import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import ProfilePostIndex from './profile_post_index';
import { openModal, closeModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        openModal: state.ui.modal,
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        postProfile: state.entities.users[postProfileId],
        friends: state.entities.friends,
        user: state.entities.users[ownProps.match.params.userId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        otherForm: (modal, id) => dispatch(openModal(modal, id)),
        fetchPosts: (pageId) => dispatch(fetchPosts(pageId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePostIndex))