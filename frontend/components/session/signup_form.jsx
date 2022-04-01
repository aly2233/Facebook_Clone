import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      (data) => {
        this.props.closeModal();
        this.props.history.push(`/profile/${data.currentUser.id}`)
      }
    );
    this.setState({
      email: this.state.email,
      password: '',
      firstName: this.state.first_name,
      lastName: this.state.last_name,
    })
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
        <div className="signup-container">

            <form className="signup-box" onSubmit={this.handleSubmit}>
                <img src={window.xImg} className="close-x" onClick={this.props.closeModal}/>
                <div className='signup-intro'>
                    <h2>Sign Up</h2>
                    <p>It's quick and easy.</p>
                </div>

                <div className="signup-border"></div>
                
                <div className="signup-input">
                  
                  <label>
                    <input type='text' onChange={this.handleInput("first_name")}
                    value={this.state.first_name} className="first-name-input"
                    placeholder="First name"/>
                  </label>

                  <label>
                    <input type='text' onChange={this.handleInput("last_name")}
                    value={this.state.last_name} className="last-name-input"
                    placeholder="Last name"/>
                  </label>

                  <label>
                    <input autoFocus type='text' onChange={this.handleInput("email")}
                    value={this.state.email} className="email-input"
                    placeholder="Email"/>
                  </label>

                  <label>
                    <input type='password' onChange={this.handleInput("password")}
                    value={this.state.password} className="password-input"
                    placeholder="New password"/>
                  </label>

                  <div className="birthday-text">Birthday</div>

                  <label>
                    <input type='date' onChange={this.handleInput("birthday")}
                    value={this.state.birthday} className="birthday-input"
                    placeholder="Birthday"/>
                  </label>

                </div>

                <p className='signup-note'>By signing up, you get to test my awesome Facebook clone :)</p>

                <input type="submit" className="session-submit" value="Sign Up"/>
            </form>
        </div>
    )
  }
}

export default withRouter(SignupForm);
