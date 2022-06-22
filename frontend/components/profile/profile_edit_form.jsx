import React from 'react';

class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            bio: this.props.user.bio,
            city: this.props.user.city,
            school: this.props.user.school,
            work: this.props.user.work
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.id = this.props.user.id;
        formData.append('user[bio]', this.state.bio);
        formData.append('user[city]', this.state.city);
        formData.append('user[school]', this.state.school);
        formData.append('user[work]', this.state.work);

        this.props.updateUserInfo(formData).then(this.props.closeModal)
    }

    render() {
        return (
            <form className='update-info-form' onSubmit={this.handleSubmit}>
                <span onClick={this.props.closeModal} className="close-x update-form">&times;</span>
                <h3>Edit Profile </h3>
                <label>About Me</label>
                <textarea  onChange={this.update('bio')} value={this.state.bio}></textarea>
                <label>Current City</label>
                <input type="text" onChange={this.update('city')} value={this.state.city}/>
                <label>Education</label>
                <input type="text" onChange={this.update('school')} value={this.state.school}/>
                <label>Profession</label>
                <input type="text" onChange={this.update('work')} value={this.state.work}/>
                <button>Update Info</button>
            </form>
        );
    }
}

export default ProfileEditForm;