import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container'
import CommentIndexContainer from '../comment/comment_index_container';
import Like from '../likes/likes'

class PostIndexUtil extends React.Component{
    constructor(props) {
        super(props);

        this.destroyPost = this.destroyPost.bind(this);
        this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
        this.displayPostAuthor = this.displayPostAuthor.bind(this);
        this.focusComment = this.focusComment.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
    }

    toggleLike(e) {
        e.preventDefault();

        let newLike = {
            likeable_type: "Post",
            likeable_id: this.props.post.id
        };
        let toggle = false;
        this.props.likes.forEach( like => {
            if (like.author_id === this.props.currentUser.id) {
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

    destroyPost(e) {
        e.preventDefault();
        this.props.deletePost(this.props.post.id)
    }
    
    displayDropdownMenu() {
        if (this.props.currentUser.id === this.props.post.author_id || this.props.currentUser.id === this.props.post.profile_id) {
            if (this.props.currentUser.id === this.props.post.post_author_id) {
                return (
                    <>
                        <button className='post-menu-btn-icon'></button>
                        <ul className='post-menu-dropdown-list'>
                            <li><button className='post-menu-dropdown-btn' onClick={() => this.props.otherForm('Update Post', this.props.post.id)}>Edit</button></li>
                            <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
                        </ul>
                    </>
                )    
            } else {
                return (
                    <>
                        <button className='post-menu-btn-icon'></button>
                        <ul className='post-menu-dropdown-list'>
                            <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
                        </ul>
                    </>
                )
            }
        }
    }

    displayPostAuthor() {
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = month[this.props.post.created_at.slice(5, 7) - 1];
        let year = this.props.post.created_at.slice(0, 4);
        let day = this.props.post.created_at.slice(8, 10);

        let hour = this.props.post.created_at.slice(11, 13)
        let min = this.props.post.created_at.slice(13, 16)
        let time;

        if (hour < 1) {
            hour = 12;
            time = `${hour}${min} AM`;
        } else if (hour > 12) {
            hour = hour % 12;
            time = `${hour}${min} PM`;
        } else {
            time = `${hour}${min} AM`;
        }
        const postAuthor = this.props.users[this.props.post.author_id]
        return (
            <div className='post-author-container'>
                <Link to={`/users/${postAuthor.id}`}><img className='post-author-pic' src={postAuthor.profilePicture} /></Link>
                <div className='post-author-time-container'>
                    {postAuthor.id === this.props.post.profile_user_id ? <div className='post-author'><Link to={`/users/${postAuthor.id}`}>{postAuthor.first_name} {postAuthor.last_name}</Link></div>
                        : <div className='post-author'>
                            <Link to={`/users/${postAuthor.id}`}>{postAuthor.first_name} {postAuthor.last_name}</Link> ▸ <Link to={`/users/${this.props.post.profile_user_id}`}>
                                {this.props.users[this.props.post.profile_id].first_name} {this.props.users[this.props.post.profile_user_id].last_name}</Link></div>}
                    <div className='post-time'>{month} {day}, {year} at {time}</div>
                </div>
                    {this.displayDropdownMenu()}
            </div>
        )
    }

    focusComment(e) {
        e.preventDefault();
        document.getElementById(`comment-form-input-id-${this.props.post.id}`).focus();
    }

    render() {
        let liked = false;
        this.props.likes.forEach(like => {
            if (like.author_id === this.props.currentUser.id) {
                liked = true;
            }
        })

        let boldLikes = liked ? 'bold-like' : '';
        let displayLikes;

        if (this.props.likes.length !== undefined ) {
            displayLikes = <Like currentUser={this.props.currentUser}
                liked={liked}
                likes={this.props.likes}
                type='Post'
            />
        }

        return (
            <li>Hello
                {this.displayPostAuthor()}
                
                <div className='wallpost-body'>{this.props.post.body}</div>
                <img className='wallpost-photos' src={this.props.post.postPhoto} />
                
                {/* {displayLikes} */}

                <div className='like-comment-container'>
                    <div onClick={this.toggleLike} className={boldLikes}><i className="far fa-thumbs-up likebtn"></i>Like</div>
                    <div onClick={this.focusComment}><i className="far fa-comment-alt"></i>Comment</div>
                </div>

                <CommentIndexContainer post={this.props.post}/>
                <CommentFormContainer post={this.props.post}/>
            </li>
           
        );
    }
}

export default PostIndexUtil