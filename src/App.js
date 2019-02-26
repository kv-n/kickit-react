import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.getShoes()
  }

  getShoes = async () => {
    try {
      const shoeResponse = await fetch('http://localhost:8000/api/v1/shoes')
      
      const shoeParsed = await shoeResponse.json()

      console.log(shoeParsed)
    } catch(err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div className="App">
      <h1>Kick It</h1>
      </div>
    );
  }
}

export default App;
