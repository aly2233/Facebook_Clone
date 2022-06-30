import { connect } from 'react-redux';
import CommentForm from './comment_form'
import { createComment, updateComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        post: state.entities.posts[ownProps.post.id]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)