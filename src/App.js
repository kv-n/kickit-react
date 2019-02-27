import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowShoe from './Components/ShowShoe/ShowShoe'
import ShoeIndex from './Components/ShoeIndex/ShoeIndex'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    shoes: [],
    users: []
  }

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
  render() {
    const { shoes, users } = this.state 
    return (
      // pages
        // home page => login component and a signup component 
      <div>
        <Switch>
          <Route exact path={'/'} component={() => <div>this is the root route</div>} />
          <Route exact path={'/shoes'} component={() => <ShoeIndex />} />
          <Route exact path={'/shoes/:id'} component={() => <ShowShoe />} />
          <Route exact path={'/profile'} component={() => <div>this is the user profile route</div>} />
        </Switch>

      </div>
    );
  }
}

export default App;
