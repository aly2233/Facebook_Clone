import React from 'react';

class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            bio: this.props.user.bio,
            relationship: this.props.user.relationship,
            hometown: this.props.user.hometown,
            school: this.props.user.school,
            current_town: this.props.user.current_town,
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
        formData.append('user[current_town]', this.state.current_town);
        formData.append('user[school]', this.state.school);
        formData.append('user[hometown]', this.state.hometown);
        formData.append('user[relationship]', this.state.relationship);

        

        this.props.updateUser(formData).then(this.props.closeModal)
    }

    render() {
        return (
            <form className='update-info-form' onSubmit={this.handleSubmit}>
                <span onClick={this.props.closeModal} className="close-x update-form">&times;</span>
                <h3>Edit Details </h3>
                <label>About Me</label>
                <textarea onChange={this.update('bio')} value={this.state.bio}></textarea>
                <label>Education</label>
                <input type="text" onChange={this.update('school')} value={this.state.school}/>
                <label>Current City</label>
                <input type="text" onChange={this.update('current_town')} value={this.state.current_town}/>
                <label>Hometown</label>
                <input type="text" onChange={this.update('hometown')} value={this.state.hometown}/>
                <label>Relationship</label>
                <input type="text" onChange={this.update('relationship')} value={this.state.relationship}/>
                <button>Update Info</button>
            </form>
        );
    }
}

export default ProfileEditForm;