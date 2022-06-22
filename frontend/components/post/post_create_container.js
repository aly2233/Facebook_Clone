import {connect} from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const postCreateId = ownProps.match.params.userId || state.session.id

    return ({
        openModal: state.ui.modal,
        formType: 'Create Post',
        currentUser: state.entities.users[state.session.id],
        postCreateId: postCreateId
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        otherForm: (modal) => dispatch(openModal(modal)),
        createPost: (post) => dispatch(createPost(post)),
        fetchUsers: () => dispatch(fetchUsers()),
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))