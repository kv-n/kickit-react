import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoeShow from './Components/ShoeShow/ShoeShow';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    shoes: []
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
    const { shoes } = this.state
    console.log(shoes)
    return (
      // pages
        // home page => login component and a signup component 
      <div>
        <Switch>
          <Route exact path={'/'} component={() => <div>this is the root route</div>} />
          <Route exact path={'/shoes'} component={() => <div>this is the shoes index route</div>} />
          <Route exact path={'/shoe'} component={() => <div>this is the shoe show route</div>} />
          <Route exact path={'/profile'} component={() => <div>this is the user profile route</div>} />
        </Switch>

      </div>
    );
  }
}

export default App;
