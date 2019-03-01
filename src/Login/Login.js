import React, { Component } from 'react';
import './Login.css'
import { withRouter } from 'react-router-dom'


class Login extends Component {
  constructor(){
    super();

    this.state = {
      fields:{
        username: '',
        email: '',
        password: '',
      },
      message:''
    }
  }

  handleChange = (e) => {
    this.setState({
      fields:{
      ...this.state.fields,
      [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await fetch('http://localhost:8000/api/v1/users/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state.fields),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();
    //if theres no message it returns an actual user
    if (parsedResponse !== 'Youre email or password doesnt match'){
      console.log(parsedResponse)
      this.props.doSetCurrentUser(parsedResponse)
      this.props.history.push("/shoes");
      console.log(parsedResponse, 'logged')
    } else {
      console.log(parsedResponse)
      this.setState({
        fields:{
          username: '',
          email: '',
          password: '',
          },
          message: "Please register an account"    
      })
    }
    

  }


  render(){
    const { username, email, password } = this.state.fields
    return (
      <div className="login-container">
        <h1>{this.state.message}</h1>
        <form className="login-flex" onSubmit={this.handleSubmit}>
        <h1 className="login-header">Log in</h1>
            <label>
              <input id="login1" className="login-input" type='text' name='username' placeholder="username" onChange={this.handleChange} value={username}/>
            </label>
            <label>
              <input id="login2" className="login-input" type='email' name='email' placeholder="email" onChange={this.handleChange} value={email}/>
            </label>
            <label>
              <input id="login3" className="login-input" type='password' name='password' placeholder="password" onChange={this.handleChange} value={password}/>
            </label>
          <button className="login-btn" type='submit'>Login</button>
        </form>
      </div>
      )
  }
}

export default withRouter(Login);