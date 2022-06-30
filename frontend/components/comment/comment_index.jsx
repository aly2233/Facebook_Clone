import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const CommentIndexList = this.props.comments.map(comment => {
            return <CommentIndexItemContainer key={comment}
                comment={comment}
                post={this.props.post}
            />
        })


        return (

            <ul className='comment-index'>
                {this.props.comments && CommentIndexList}
            </ul>
        );
    }
}

export default CommentIndex