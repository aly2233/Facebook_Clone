import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const CommentIndexList = this.props.comments.map(comment => {
            return <CommentIndexItemContainer key={comment.id}
                comment={comment}
                post={this.props.post}
            />
        })

        return (
            <ul className='comment-index'>
                {CommentIndexList}
            </ul>
        );
    }
}

export default CommentIndex