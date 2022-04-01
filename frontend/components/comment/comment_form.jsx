import React from 'react';

class CommentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: '',
            post_id: null,
            commenter_id: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });      
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = Object.assign({}, this.state);
        comment['post_id'] = this.props.post.id;
        this.setState({body: ''})
    }

    render() {
        return(
            <div className="comment-form-container">
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text"
                    value={this.state.body}
                    placeholder="Write a comment..."
                    onChange={this.update('body')}
                    />
                </form>
            </div>
        )
    }


}

export default CommentForm