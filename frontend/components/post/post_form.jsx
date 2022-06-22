import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            photoFile: null,
            photoUrl: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.cancelPhoto = this.cancelPhoto.bind(this);
        this.clickFile = this.clickFile.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body)
        formData.append('post[profile_id]', this.props.postProfileId)
        formData.append('post[post_id]', this.props.currentUser.id)

        if (this.state.photoFile) {
            formData.append('post[post_photo]', this.state.photoFile)
        }
        
        this.props.createPost(formData)

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

    cancelPhoto() {
        this.setState({photoFile: null, photoUrl: null})
    }

    clickFile(field) {
        return (e) => {
            $('.post-photo-btn').click();
        }
    }


    render() {
        const showPreview = (this.state.photoUrl) ?
            (<div className='image-preview-container'>
                <img className='image-preview' src={this.state.photoUrl} />
                <span onClick={this.cancelPhoto} className="close-x cancel-photo">&times;</span>
            </div>) : null

        let postButton;
        if (this.state.body === '' && this.state.photoFile === null) {
            postButton = <button className='create-post-btn no-submit'>Submit Post</button>
        } else {
            postButton = <button className='create-post-btn' onClick={this.handleSubmit}>Submit Post</button>
        }
        

        return(
            <>
                <h2>Create Post</h2>
                <div className='post-form-container'>
                    <form className='create-post-form'>
                        <div className='post-body-container'>
                            <img className='post-form-photo' src={this.props.currentUser.profilePicture}/>
                            <textarea className='post-body' onChange={this.update('body')} value={this.state.body} placeholder="What's on your mind?"></textarea>
                        </div>
                        {showPreview}
                        <div className='upload-photo-container'>
                            <div className='upload-photo-btn' onClick={this.clickFile('post-photo-btn')}>
                                <div className='photo-icon' onClick={this.clickFile('post-photo-btn')}></div>
                                <p>Photo</p>
                                <input className='post-photo-btn' type="file" onChange={this.handleFile}/>
                            </div>
                        </div>
                        <div className='create-post-btn-container'>

                        {postButton}
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default PostForm;