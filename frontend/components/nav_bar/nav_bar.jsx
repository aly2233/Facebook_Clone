import React from "react";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: 'false',
            search: '',
            searchResults: []
        }

        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.displaySearch = this.displaySearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                search: "",
                searchResults: [],
            })
        }
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

    displaySearch() {
        if (this.state.searchResults.length === 0) {
            return null;
        } else {
            return <ul className='search-results-container'>
                {this.state.searchResults.map (user => {
                return (
                    <Link style={{textDecoration: 'none'}}to={`/profile/${user.id}`} key={user.id}>
                        <img src={user.profilePicture}/>
                        <li>{user.first_name} {user.last_name}</li>
                    </Link>
                )
            })}</ul>
        }
    }

    handleSearch(e) {
        this.setState({search: e.currentTarget.value})
        let searchResults = [];

        if (e.currentTarget.value) {
            this.props.users.forEach (user => {
                let name = user.first_name + user.last_name;
                if (name && name.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                    searchResults.push(user);
                };
            });
        };

        this.setState({searchResults: searchResults});
    }

    render() {


        const dropDownMenu = this.state.clicked === "true" ? (
            <div className="dropdown-menu-open" onClick={this.handleClick}> <img src={window.downArrow}/>
                <div className="dropdown-content">
                    <div className="dropdown-pic-name"><Link style={{textDecoration: 'none'}} to={`/profile/${this.props.currentUser.id}`}>
                        <img src ={this.props.currentUser.profilePicture}/></Link>
                        <Link style={{textDecoration: 'none'}} to={`/profile/${this.props.currentUser.id}`}><p>{`${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}</p></Link>
                    </div>
                    <p className="see-profile">See your profile</p>
                    <div className="dropdown-border"/>
                    <div className="logout-container" onClick={() => this.handleLogout()}>
                        <div className="logout-image-container">
                            <img className="logout-image" src={window.logout}/>
                        </div>
                        <div className="logout-button" >Log Out</div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="dropdown-menu-closed"> <img src={window.downArrow} onClick={this.handleClick}/></div>
        )
       
        return(
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <Link to="/newsfeed">
                        <img src={window.facebookLogo} className="logo"/>
                    </Link>
                    <a href="https://github.com/aly2233" target="_blank" rel="noopener noreferrer"><img src={window.githubImage}/></a>
                    <a href="https://www.linkedin.com/in/alan-yueh-01428a146/" target="_blank" rel="noopener noreferrer"><img src={window.linkedInImage}/></a>
                    <form className='search-bar-form'>
                        <input className='search-bar' type="text"
                            onChange={this.handleSearch}
                            value={this.state.search}
                            placeholder='Search Facelook' />
                        {this.displaySearch()}
                    </form>
                </div>
                <div className="nav-bar-center">
                    <div className='home-image-container'>
                        <Link to="/newsfeed">
                            <img src={window.homeImage}/>
                        </Link>
                    </div>
                </div>
                <div className="nav-bar-right">
                    <div className='nav-profile-and-name'> 
                        <div className='nav-profile-photo'><Link style={{textDecoration: 'none'}} to={`/profile/${this.props.currentUser.id}`}><img className='navbar-pic' src={this.props.currentUser.profilePicture} /></Link></div>
                        <Link style={{textDecoration: 'none'}} to={`/profile/${this.props.currentUser.id}`}><p>{`${this.props.currentUser.first_name}`}</p></Link>
                    </div>
                    {dropDownMenu}
                </div>
            </div>
        )
    }
}



export default NavBar