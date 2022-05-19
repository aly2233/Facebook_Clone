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
        this.displayInfoUpdate = this.displayInfoUpdate.bind(this);
        this.handlePicture = this.handlePicture.bind(this);
        this.clickPicture = this.handlePicture.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    // handlePicture(e) {
    //     let file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         this.setState({ imageUrl: reader.result, imageFile: file });
    //     }

    //     if (file) {
    //     reader.readAsDataURL(file);
    //     } else {
    //         this.setState({ imageUrl: "", imageFile: null });
    //     }
    // }

    handlePicture(field) {
        return(e) => {
            let file = e.target.files[0];
            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                this.setState({imageFile: file, imageUrl: null})
                const formData = new FormData();
                if (this.state.imageFile) {
                    formData.append(`user[cover_picture]`, file)
                    this.props.updateUser(this.props.currentUser.id, formData)
                }
            }

            if (file) {
                fileReader.readAsDataURL(file);
            }
    
        }
    }

    handleSubmit(field) {
        return(e) => {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.imageFile) {
            const formData = new FormData();
            formData.append(`user[${field}]`, file)
            this.props.updateUser(formData)
        }
        }
    }



    clickPicture(field) {
        return(e) => {
            if (field === 'upload-cover-picture') {
                $('.upload-cover-picture').click();
            } else {
                $('.upload-profile-btn').click();
            }
        }
    }

    displayInfoUpdate() {
        if (this.props.currentUser.id === this.props.user.id) {
            return(
                <button className="update-info" onClick={this.openModal}>Update Info</button>
            )
        } else {
            null
        }
    }

    displayCoverUpdate() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className='cover-picture-display-container'>
                    <div className='cover-picture-display' onClick={this.clickPicture('upload-cover-picture')}>Add Cover Photo
                        <input className='upload-cover-pic' type="file" onChange={this.handlePicture('cover_picture')}/>
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
                <div className='profile-picture-display-container'>
                    <div className='profile-picture-display' onClick={this.clickPicture('upload-profile-picture')}>Add Profile Photo
                        <input className='upload-profile-pic' type="file" onChange={this.handlePicture('profile_picture')}/>
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

        const coverPictureDisplay = (this.props.user.coverPicture) ? 
            <img src={`${this.props.user.coverPicture}`} /> :
            <img src={`${this.props.user.coverPicture}`} />

        const profilePictureDisplay = (this.props.user.profilePicture) ? 
            <img src={`${this.props.user.profilePicture}`} /> :
            <img src={`${this.props.user.profilePicture}`} />
            
        return(
            <div className="profile-header-container">
                Profile Header
                <div className="cover-picture-container">{coverPictureDisplay}</div>
                {this.displayCoverUpdate()}
                <div className="profile-picture-container">{profilePictureDisplay}</div>
                {this.displayProfileUpdate()}
                <div className="profile-header-display-name">{this.props.user.first_name} {this.props.user.last_name}</div>
            </div>
        )
    }
}

export default ProfileHeader