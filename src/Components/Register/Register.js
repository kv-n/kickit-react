import React, { Component } from 'react';
import './Register.css'
import { withRouter } from 'react-router-dom'


class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleRegister(this.state)
    this.props.history.push("/shoes");
  }

  render() {
    return (
      <div>
        <div className="signup-container">
          <form className="register-container" onSubmit={this.handleSubmit}>
          <h1 className='register-header'>Register</h1>
            <label>
              <input className="register-input1" type='text' name='username' placeholder="username" onChange={this.handleChange} />
            </label>
            <label>
              <input className="register-input2" type='email' name='email' placeholder="email" onChange={this.handleChange} />
            </label>
            <label>
              <input className="register-input3" type='password' name='password' placeholder="password" onChange={this.handleChange} />
            </label>
            <button className="register-btn" type='submit'>Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Register);