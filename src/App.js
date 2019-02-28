import React, { Component } from 'react';

import './App.css';
import ShowShoe from './Components/ShowShoe/ShowShoe'
import ShoeIndex from './Components/ShoeIndex/ShoeIndex'
import Profile from './Components/Profile/Profile'
import { Route, Switch, withRouter, Redirect, Link } from 'react-router-dom'
import Splash from './Components/Landing/Landing'
import Register from './Components/Register/Register'
import Login from './Login/Login';
import Navigation from './Components/Navigation/Navigation'


class App extends Component {
  // _isMounted = false

  state = {
    currentUser: {}
  }

  // // componentDidMount() {
  // //   this._isMounted = true;
  // // }

  doSetCurrentUser = (currentUser) => {
    console.log(currentUser)
    this.setState({ currentUser })
  }


  // handleLogout = async () => {
  //   try {
  //     const loginResponse = await fetch('http://localhost:8000/api/v1/users/logout', {
  //       method: 'GET',
  //       credentials: 'include',
  //       // body: JSON.stringify(this.state),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const parsedResponse = await loginResponse.json();
  //     console.log(this.state)
  //     // if (this._isMounted) {
  //       this.setState({
  //         currentUser: {}
  //       })
  //     // }
  //     // this.props.history.push("/");
  //     console.log(parsedResponse, 'logged')

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // componentWillUnmount() {
  //   this._isMounted = false
  // }


  handleRegister = async (data) => {
    try {
      const registerResponse = await fetch('http://localhost:8000/api/v1/users', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const registerParsed = await registerResponse.json()
      console.log(registerParsed)

    } catch (err) {
      console.log(err)
    }
  }


  render() {
    console.log(this.state)
    return (
      // pages
      // home page => login component and a signup component 
      <div>
        <Navigation 
          currentUser={this.state.currentUser} 
          handleLogout={this.handleLogout}
          doSetCurrentUser={this.doSetCurrentUser}
        />
        <Switch>
          <Route exact path={'/'} component={() => <Splash doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path={'/register'} component={() => <Register handleRegister={this.handleRegister} />} />
          <Route exact path={'/shoes'} component={() => <ShoeIndex />} />
          <Route exact path={'/shoes/:id'} component={() => <ShowShoe />} />
        </Switch>
        <div><Link to='/shoes'>hello</Link></div>
      </div>
    );
  }
}

export default withRouter(App);
