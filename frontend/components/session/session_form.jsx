import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
        this.props.history.push(`/profile/${data.currentUser.id}`)
      }
    );
  }

  demoLogin() {
    const demo = {
      email: "demo@demo.com", 
      password: "demodemo", 
    };

    this.props.processForm(demo).then(
      (data) => {
        this.props.history.push(`/profile/${data.currentUser.id}`
        )}
    );
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
      <div className="welcome-page">
        <div className="welcome-page-top">
          <div className="splash-left-intro">
            <p className="logo">facelook</p>
            <p>Connect with friends and the world</p>
            <p>around you on Facelook.</p>
          </div>
          
          <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <label>
              <input type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <input className="session-submit" type="submit" value={this.props.formType} />

            <div className="demo-user" onClick={this.demoLogin}>Demo User?</div>
            <div className="border-line-input"></div>
            <div className="signup" onClick={() => this.props.openModal('signup')}>Create new account</div>
            </div>
        </form>
        </div>
        <div className="splash-footer">
          <div className="footer-info">
            <ul>
              <li>English (US)</li>
              <li>Español</li>
              <li>Français (France)</li>
              <li>中文(简体)</li>
              <li>لعربية</li>
              <li>Português (Brasil)</li>
              <li>Italiano</li>
              <li>한국어</li>
              <li>Deutsch</li>
              <li>हिन्दी</li>
              <li>日本語</li>
            </ul>
            <div className="border-line-footer"></div>
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Portfolio</li>
              <li>Facebook</li>
            </ul>
            <ul>
              <p>Facebook Clone by Alan Yueh @ 2022</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);