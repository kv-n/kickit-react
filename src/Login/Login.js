import React, { Component } from 'react';
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
    this.props.history.push("/shoes");
    console.log(parsedResponse, 'logged')
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type='text' name='username' onChange={this.handleChange}/>
        </label>
        <label>
          email:
          <input type='email' name='email' onChange={this.handleChange}/>
        </label>
        <label>
          password:
          <input type='password' name='password' onChange={this.handleChange}/>
        </label>
        <button type='submit'>Login</button>
      </form>

      )
  }
}

export default withRouter(Login);