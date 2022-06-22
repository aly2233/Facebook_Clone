import React from 'react';
import { Link } from 'react-router-dom';

class NewsFeedLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='newsfeed-left'>

                <div className='feed-profile-photo'>
                    {/* <Link to={`/users/${this.props.currentUser.id}`}>
                        <img className='feed-pic' src={this.props.currentUser.profilePicture} />
                        <div className='newsfeed-name'>{this.props.currentUser.fname} {this.props.currentUser.lname}</div>
                    </Link> */}
                </div>

                <div className='feed-link'>
                    <div className='feed-home-button'><Link to='/newsfeed'>News Feed</Link></div>
                    <div className='feed-home-icon'></div>
                </div>

                <div className='newsfeed-outside-links'>
                    <h1>Shortcuts</h1>
                    <a target="_blank" href="https://www.linkedin.com/in/alan-yueh-01428a146/"><div className='link-container'>
                        <div className='link-name'>LinkedIn</div>
                        <i className="fab fa-linkedin link-icon"></i>
                    </div></a>

                    <a target="_blank" href="https://github.com/aly2233"><div className='link-container'>
                        <div className='link-name'>GitHub</div>
                        <i className="fab fa-github link-icon"></i>
                    </div></a>

                    <a target="_blank" href="https://github.com/aly2233/Facelook"><div className='link-container'>
                        <div className='link-name'>Facelook Repo</div>
                        <i className="fas fa-code-branch link-icon"></i>
                    </div></a>
                </div>

            </div>
        );
    }
}

export default NewsFeedLinks;