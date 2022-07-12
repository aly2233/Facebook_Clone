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
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });      
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        
        let comment = Object.assign({}, this.state);
        comment['post_id'] = this.props.post.id;
        this.props.createComment(comment);

        this.setState({
            body: '',
        })
    }

    render() {
        return(
            <div className="comment-form-container">
                <img src={this.props.currentUser.profilePicture}/>
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text"
                    autoComplete='off'
                    value={this.state.body}
                    placeholder="Write a comment..."
                    onChange={this.update('body')}
                    id = {`comment-form-input-id-${this.props.post.id}`}
                    />
                </form>
            </div>
        )
    }


}

export default CommentForm