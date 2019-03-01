import React, { Component } from 'react';
import Edit from './EditPage/EditPage'
import './App.css';
import ShowShoe from './Components/ShowShoe/ShowShoe'
import ShoeIndex from './Components/ShoeIndex/ShoeIndex'
import Profile from './Components/Profile/Profile'
import { Route, Switch, withRouter } from 'react-router-dom'
import Splash from './Components/Landing/Landing'
import Register from './Components/Register/Register'
import Login from './Login/Login';
import Navigation from './Components/Navigation/Navigation'


class App extends Component {
  state = {
    currentUser: {}
  }


  doSetCurrentUser = (currentUser) => {
    console.log(currentUser)
    this.setState({ currentUser })
  }

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
      delete registerParsed.password 
      this.props.history.push("/shoes");
      this.doSetCurrentUser(registerParsed);

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
          <Route exact path={'/register'} component={() => <Register handleRegister={this.handleRegister} doSetCurrentUser={this.doSetCurrentUser} />} />
          <Route exact path={'/profile'} component={() => <Profile currentUser={this.state.currentUser}/>} />
          <Route exact path={'/shoes'} component={() => <ShoeIndex currentUser={this.state.currentUser}/>} />
          <Route exact path={'/shoes/:id'} component={() => <ShowShoe />} />
          <Route exact path={'/shoes/:id/edit'} component={() => <Edit/>} />
          <Route exact path={'/login'} component={() => <Login doSetCurrentUser={this.doSetCurrentUser}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);