import React from "react";

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imageFile: null,
            imageUrl: "",
        }

        this.displayProfileUpdate = this.displayProfileUpdate.bind(this);
        this.displayCoverUpdate = this.displayCoverUpdate.bind(this);
        this.handlePicture = this.handlePicture.bind(this);
        this.clickPicture = this.clickPicture.bind(this);
        this.openModal = this.openModal.bind(this);
    }


    handlePicture(field) {
        return(e) => {
            let file = e.target.files[0];
            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                this.setState({imageFile: file, imageUrl: null})
                const formData = new FormData();
                if (this.state.imageFile) {
                    formData.append(`user[${field}]`, file)
                    this.props.updateUser(formData)
                }
            }
            if (file) {
                fileReader.readAsDataURL(file);
            }
    
        }
    }



    clickPicture(field) {
        return(e) => {
            if (field === 'upload-cover-picture') {
                $('.upload-cover-pic-button').click();
            } else {
                $('.upload-profile-pic-button').click();
            }
        }
    }


    displayCoverUpdate() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className='cover-picture-button-container'>
                    <div className='cover-camera-icon' onClick={this.clickPicture('upload-cover-button')}></div>
                    <div className='cover-picture-button' onClick={this.clickPicture('upload-cover-button')}>
                        <input className='upload-cover-pic-button' type="file" onChange={this.handlePicture('cover_picture')}/>
                    </div>
                </div>
            )
        } else {
            null
        }
    }

    displayProfileUpdate() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className='profile-picture-button-container'>
                    <div className='profile-camera-icon' onClick={this.clickPicture('upload-profile-button')}></div>
                    <div className='profile-picture-button' onClick={this.clickPicture('upload-profile-button')}>
                        <input className='upload-profile-pic-button' type="file" onChange={this.handlePicture('profile_picture')}/>
                    </div>
                </div>
            )
        } else {
            null
        }
    }

    openModal() {
        this.props.otherForm('Update Info', this.props.currentUser.id)
    }
    
    render() {
        if (!this.props.user) return <div>Loading</div>
        const coverPictureDisplay = (this.props.user.coverPicture) ? 
            <img src={`${this.props.user.coverPicture}`} /> :
            <img src='https://i.stack.imgur.com/l60Hf.png' />

        const profilePictureDisplay = (this.props.user.profilePicture) ? 
            <img src={`${this.props.user.profilePicture}`} /> :
            <img src='https://i.stack.imgur.com/l60Hf.png' />
        
        
        return(
            <>
                <div className="profile-header-container">
                    <div className="cover-picture-container">{coverPictureDisplay}</div>
                    {this.displayCoverUpdate()}
                    <div className="profile-pic-and-name">
                        <div className="profile-picture-container">{profilePictureDisplay}</div>
                        <div className="profile-header-display-name">{this.props.user.first_name} {this.props.user.last_name}</div>
                    </div>
                    {this.displayProfileUpdate()}
                </div>
                <div className="profile-border"/>
            </>
        )
    }
}


export default ProfileHeader