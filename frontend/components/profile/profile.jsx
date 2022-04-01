import React from 'react';


class Profile extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchUsers();
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div>Profile Page</div>
        )
    }
}

export default Profile;