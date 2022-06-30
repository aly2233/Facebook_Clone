import React from "react";
import FriendsInfo from "./friends_info";

class ProfileInfo extends React.Component {
    constructor(props){
        super(props)
        this.displayInfoUpdate = this.displayInfoUpdate.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    componentDidUpdate(previousProps){
        if (this.props.match.params.userId !== previousProps.match.params.userId) {
        this.props.fetchUser(this.props.match.params.userId).then(
                () => {
                    return this.setState({
                        birthday: this.props.user.birthday,
                        bio: this.props.user.bio,
                        relationship: this.props.user.relationship,
                        hometown: this.props.user.hometown,
                        school: this.props.user.school,
                        current_town: this.props.user.current_town,
                    })
                }
            )
        }
    }


    openModal() {
        this.props.otherForm('Update Info')
    }

    displayInfoUpdate() {
        if (this.props.currentUser.id === this.props.user.id) {
            return(
                <button className="update-info" onClick={this.openModal}>Edit Details</button>
            )
        } else {
            null
        }
    }


    render() {
        let day = this.props.user.birthday.slice(8, 10);
        let year = this.props.user.birthday.slice(0, 4);
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = month[this.props.user.birthday.slice(5, 7) - 1];


        let friendsInfo
        if (this.props.user) {
            friendsInfo = <FriendsInfo
            user={this.props.user}
            friends={this.props.userFriends}
            users={this.props.users}/>
        } else {
            null
        }


        return(
            <>
                <div className="profile-info-container">
                    <h2>Intro</h2>
                    <p>{this.props.user.bio}</p>
                    <ul className="profile-info-all">
                        <li>
                            <div className="birthday-icon"></div>
                            Born on: {month} {day}, {year}</li>
                        <li>
                            <div className="school-icon"></div>
                            Went to {this.props.user.school}</li>
                        <li>
                            <div className="hometown-icon"></div>
                            From {this.props.user.hometown}</li>
                        <li>
                            <div className="current-location-icon"></div>
                            Lives in {this.props.user.current_town}</li>
                        <li>
                            <div className="heart-icon"></div>
                            {this.props.user.relationship}</li>
                        {this.displayInfoUpdate()}
                    </ul>
                </div>

                <div className="profile-photo-container">
                    <div className="profile-photo-icon"></div>
                    <h2>Photos</h2>
                    <p>No Photos to Show</p>
                </div>
                
                {friendsInfo}
            </>

        )
    }
}

export default ProfileInfo;