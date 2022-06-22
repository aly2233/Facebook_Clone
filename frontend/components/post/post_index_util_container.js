import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';
import PostIndexUtil from './post_index_util';
import { createLike, deleteLike } from '../../actions/like_actions';
import { getLikes } from '../../reducers/select_reducer';
import { deletePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    const postProfileId = ownProps.match.params.userId || state.session.id
    
    return ({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        postProfile: state.entities.users[postProfileId],
        post: ownProps.post,
        likes: getLikes(state, ownProps.post)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        otherForm: (modal, id) => dispatch(openModal(modal, id)),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndexUtil))