import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../likes/likes'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            body: this.props.comment.body,
            clicked: 'false'
        }
        this.destroyComment = this.destroyComment.bind(this);
        this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
        this.changeComment = this.changeComment.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleLike(e) {
        e.preventDefault();

        let newLike = {
            likeable_type: "Comment",
            likeable_id: this.props.comment.id
        };
        let toggle = false;
        this.props.likes.forEach(like => {
            if (like.liker_id === this.props.currentUser.id) {
                newLike = like;
                toggle = true;
            }
        })

        if (toggle) {
            this.props.deleteLike(newLike);
        } else {
            this.props.createLike(newLike);
        }
    }

    destroyComment(e) {
        e.preventDefault();
        this.handleClick();
        this.props.deleteComment(this.props.comment);
    }

    handleClick() {
        if (this.state.clicked === "true") {
            this.setState({ clicked: "false"})
        } else {
            this.setState({ clicked: "true"});
        }
    }

    displayDropdownMenu() {
        if (this.props.currentUser.id === this.props.comment.commenter_id || this.props.currentUser.id === this.props.postProfile.id) {
            if (this.props.currentUser.id === this.props.comment.commenter_id) {
                if (this.state.clicked === "true") {
                    return (
                        <>  
                            <div className='comment-menu-btn-icon-border' onClick={this.handleClick}>
                                <button className='comment-menu-btn-icon'></button>
                            </div>
                            <ul className='comment-menu-dropdown-list'>
                                <li><button className='comment-menu-dropdown-btn' onClick={this.changeComment}>Edit Comment</button></li>
                                <li><button className='comment-menu-dropdown-btn' onClick={this.destroyComment}>Delete Comment</button></li>
                            </ul>
                        </>
                    )
                } else {
                    return (
                        <div className='comment-menu-btn-icon-border' onClick={this.handleClick}>
                            <button className='comment-menu-btn-icon'></button>
                        </div>
                    )
                }
            } else if (this.props.currentUser.id === this.props.post.author_id){
                if (this.state.clicked === "true") {
                return (
                    <>
                        <button className='comment-menu-btn-icon'></button>
                        <ul className='comment-menu-dropdown-list'>
                            <li><button className='comment-menu-dropdown-btn' onClick={this.destroyComment}>Delete</button></li>
                        </ul>
                    </>
                )
                } else {
                    return (
                        <div className='comment-menu-btn-icon-border' onClick={this.handleClick}>
                            <button className='comment-menu-btn-icon'></button>
                        </div>
                    )
                }
            }
        }
    }

    changeComment(e) {
        this.setState({edit: true})
        this.handleClick();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.id = this.props.comment.id;
        formData.append('comment[body]', this.state.body);

        this.props.updateComment(formData)
        this.setState({
            edit: false,
        })
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({edit: false})
    }


    render() {
        let commentDisplay;
        this.state.edit === true ? commentDisplay = 
            <>
                <input className='comment-body' type="text"
                    onChange={this.update('body')}
                    value={this.state.body}
                    onKeyPress={ e => {
                        if (e.key === 'Enter') {
                        e.preventDefault();
                        this.handleSubmit();}
                    }}
                />
            </> : commentDisplay = <>
            <div className='comment-name'>
                            <Link style={{textDecoration: 'none'}} to={`/profile/${this.props.comment.commenter_id}`}>
                                {this.props.users[this.props.comment.commenter_id].first_name} {this.props.users[this.props.comment.commenter_id].last_name}
                            </Link>
                        </div>
                        <div className='comment-body'>{this.state.body}</div>
                        </>
    
        let liked = false;
        this.props.likes.forEach(like => {
            if (like.liker_id === this.props.currentUser.id) {
                liked = true;
            }
        })

        let underlineLike = liked ? 'underline-like' : '';
        let displayLikes;

        if (this.props.likes.length !== undefined) {
            displayLikes = <Like currentUser={this.props.currentUser}
                liked={liked}
                likes={this.props.likes}
                type='Comment'
            />
        }

        return (
            <li>
                <div className="comment-pic-name-body">
                    <Link style={{textDecoration: 'none'}} to={`/profile/${this.props.comment.commenter_id}`}>
                        <img className='comment-author-pic' src={this.props.users[this.props.comment.commenter_id].profilePicture} />
                    </Link>
                    <div className='comment-index-item-container'>
                        {/* <div className='comment-name'>
                            <Link style={{textDecoration: 'none'}} to={`/profile/${this.props.comment.commenter_id}`}>
                                {this.props.users[this.props.comment.commenter_id].first_name} {this.props.users[this.props.comment.commenter_id].last_name}
                            </Link>
                        </div> */}

                        {commentDisplay}
                        {this.displayDropdownMenu()}
                        {displayLikes}

                        {this.state.edit === true ? <div className='cancel-edit-comment' onClick={this.handleCancel}>Cancel</div> : null}
                    </div>
                </div>
                
                <div className="break"></div>
                <div className='like-comment-btn' onClick={this.toggleLike} id={underlineLike}>Like</div>
            </li>
        );
    }
}

export default CommentIndexItem