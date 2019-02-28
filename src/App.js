import React, { Component } from 'react';

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
    this.setState({currentUser})
  }
    // this.setState(currentUser)
  // state = {
  //   shoes: [],
  //   users: []
  // }

  // componentDidMount() {
  //   this.getShoes()
  // }

  // getShoes = async () => {
  //   try {
  //     const shoeResponse = await fetch('http://localhost:8000/api/v1/shoes')
      
  //     const shoeParsed = await shoeResponse.json()
  //     this.setState({
  //       shoes: shoeParsed.shoes
  //     })

  //   } catch(err) {
  //     console.log(err)
  //   }
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

      } catch (err){
        console.log(err)
      }
    }


  render() {
    return (
      // pages
        // home page => login component and a signup component 
      <div>
        <Navigation currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path={'/'} component={() => <Splash doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route exact path={'/register'} component={() => <Register handleRegister={this.handleRegister}/>} />
          <Route exact path={'/login'} component={() => <Login /> } />
          <Route exact path={'/shoes'} component={() => <ShoeIndex />} />
          <Route exact path={'/shoes/:id'} component={() => <ShowShoe />} />
          <Route exact path={'/profile'} component={() => <Profile />} />
        </Switch>

      </div>
    );
  }
}

export default App;
