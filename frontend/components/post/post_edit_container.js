import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost } from '../../actions/post_actions';
import PostEditForm from './post_edit_form';
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        openModal: state.ui.modal,
        post: state.entities.posts[ownProps.id],
        currentUser: state.entities.users[state.session.id],
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        otherForm: (modal) => dispatch(openModal(modal)),
        action: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal()),
        updatePost: (post) => dispatch(updatePost(post))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEditForm))