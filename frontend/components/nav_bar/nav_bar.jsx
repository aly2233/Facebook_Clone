import React from "react";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: 'false'
        }

        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleLogout() {
        this.props.logout();
        this.props.history.push("/");
    }

    handleClick() {
        if (this.state.clicked === "true") {
            this.setState({ clicked: "false"})
        } else {
            this.setState({ clicked: "true"});
        }
    }

    render() {
        const dropDownMenu = this.state.clicked === "true" ? (
            <div className="dropdown-menu-open" onClick={this.handleClick}>▼
                <div className="dropdown-content">
                    <p>{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                    <p>See your profile</p>
                    <button className="logout-button" onClick={() => this.handleLogout()}>Log Out</button>
                </div>
            </div>
        ) : (
            <div className="dropdown-menu-closed" onClick={this.handleClick}>▼</div>
        )
        return(
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <Link to="/posts">
                        <img src={window.facebookLogo} className="logo"/>
                    </Link>
                    <a href="https://github.com/aly2233" target="_blank" rel="noopener noreferrer"><img src={window.githubImage}/></a>
                    <a href="https://www.linkedin.com/in/alan-yueh-01428a146/" target="_blank" rel="noopener noreferrer"><img src={window.linkedInImage}/></a>
                </div>
                <div className="nav-bar-center">
                    <Link to="/posts">
                        <img src={window.homeImage}/>
                    </Link>
                </div>
                <div className="nav-bar-right">
                    <p>{`${this.props.user.first_name} ${this.props.user.last_name}`}</p>
                    {dropDownMenu}
                </div>
            </div>
        )
    }

}

export default NavBar