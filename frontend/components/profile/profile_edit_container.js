import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import ProfileEditForm from './profile_edit_form';
import {fetchUser, updateUser} from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        openModal: state.ui.modal,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        updateUser: (user) => {
            return dispatch(updateUser(user))
        },
        otherForm: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm))