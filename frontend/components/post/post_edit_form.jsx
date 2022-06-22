import React from 'react';

class PostEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.post.body,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.id = this.props.post.id;
        formData.append('post[body]', this.state.body);
        this.props.updatePost(formData).then(this.props.closeModal())

        this.setState({
            body: '',
            photoFile: null,
            photoUrl: null,
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        let postButton;

        if (this.state.body === '') {
            postButton = <button className='no-submit'>Save</button>
        } else {
            postButton = <button onClick={this.handleSubmit}>Save</button>
        }

        return (
            <form className='update-post-form'>
                <span onClick={this.props.closeModal} className="close-x post-form-modal">&times;</span>
                <h3>Edit Post </h3>
                <textarea  onChange={this.update('body')} value={this.state.body}></textarea>
                {postButton}
            </form>
        );
    }
}

export default PostEditForm;