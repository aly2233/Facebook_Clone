import React from "react";

class ProfileInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            birthday: '',
            bio: '',
            relationship: '',
            hometown: '',
            school: '',
            current_town: ''
        }
    }

    componentDidMount(){
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

    render() {
        let day = this.state.birthday.slice(8, 10);
        let year = this.state.birthday.slice(0, 4);
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = month[this.state.birthday.slice(5, 7) - 1];
        
        return(
            <div className="profile-info-container">
                <h2>Intro</h2>
                <p>{this.state.bio}</p>
                <div className="profile-info-all">
                    <div className="birthday-icon">Born on: {month} {day}, {year}</div>
                    <div className="school-icon">Went to {this.state.school}</div>
                    <div className="hometown-icon">From {this.state.hometown}</div>
                    <div className="current-location-icon">Lives in {this.state.current_town}</div>
                    <div className="heart-icon">{this.state.relationship}</div>
                </div>


            </div>
        )
    }
}

export default ProfileInfo;