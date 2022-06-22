import React from "react";
import FriendsInfo from "./friends_info";

class ProfileInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            birthday: this.props.user.birthday,
            bio: this.props.user.bio,
            relationship: this.props.user.relationship,
            hometown: this.props.user.hometown,
            school: this.props.user.school,
            current_town: this.props.user.current_town,
            users: this.props.users
        }

        this.displayInfoUpdate = this.displayInfoUpdate.bind(this);
    }

    // componentDidMount(){
        // this.props.fetchUser(this.props.match.params.userId).then(
        //     () => {
            //     console.log(this.props.user)
            //     return this.setState({
            //         birthday: this.props.user.birthday,
            //         bio: this.props.user.bio,
            //         relationship: this.props.user.relationship,
            //         hometown: this.props.user.hometown,
            //         school: this.props.user.school,
            //         current_town: this.props.user.current_town,
            //     })
            // }
        // )
    // }

    componentDidUpdate(previousProps){
        if (this.props.match.params.userId !== previousProps.match.params.userId) {
        this.props.fetchUser(this.props.match.params.userId).then(
                () => {
                    console.log(this.props.user)
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
        let day = this.state.birthday.slice(8, 10);
        let year = this.state.birthday.slice(0, 4);
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = month[this.state.birthday.slice(5, 7) - 1];
        console.log(this.props.user.id)
        
        return(
            <>
                <div className="profile-info-container">
                    <h2>Intro</h2>
                    <p>{this.state.bio}</p>
                    <ul className="profile-info-all">
                        <li>
                            <div className="birthday-icon"></div>
                            Born on: {month} {day}, {year}</li>
                        <li>
                            <div className="school-icon"></div>
                            Went to {this.state.school}</li>
                        <li>
                            <div className="hometown-icon"></div>
                            From {this.state.hometown}</li>
                        <li>
                            <div className="current-location-icon"></div>
                            Lives in {this.state.current_town}</li>
                        <li>
                            <div className="heart-icon"></div>
                            {this.state.relationship}</li>
                        {this.displayInfoUpdate()}
                    </ul>
                </div>

                <div className="profile-photo-container">
                    <div className="profile-photo-icon"></div>
                    <h2>Photos</h2>
                    <p>No Photos to Show</p>
                </div>
                
                <FriendsInfo
                    currentUser={this.props.currentUser}
                    friends={this.props.userFriends}
                    users={this.props.users}/>
            </>

        )
    }
}

export default ProfileInfo;