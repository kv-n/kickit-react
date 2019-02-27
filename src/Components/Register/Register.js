import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Register extends Component {
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
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleRegister(this.state)
    this.props.history.push("/shoes");
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
        <button type='submit'>Register</button>
      </form>

      )
  }
}

export default withRouter(Register);