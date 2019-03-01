import React, { Component } from 'react';
import './Login.css'
import { withRouter } from 'react-router-dom'


class Login extends Component {
  constructor(){
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

  handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await fetch('http://localhost:8000/api/v1/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();
    console.log(this.state)
    this.props.doSetCurrentUser(parsedResponse)
    this.props.history.push("/shoes");
    console.log(parsedResponse, 'logged')
  }


  render(){
    return (
      <div className="login-container">
        <form className="login-flex" onSubmit={this.handleSubmit}>
        <h1 className="login-header">Log in</h1>
            <label>
              <input id="login1" className="login-input" type='text' name='username' placeholder="username" onChange={this.handleChange}/>
            </label>
            <label>
              <input id="login2" className="login-input" type='email' name='email' placeholder="email" onChange={this.handleChange}/>
            </label>
            <label>
              <input id="login3" className="login-input" type='password' name='password' placeholder="password" onChange={this.handleChange}/>
            </label>
          <button className="login-btn" type='submit'>Login</button>
        </form>
      </div>
      )
  }
}

export default withRouter(Login);