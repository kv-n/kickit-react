import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

// extend class component
// component did mount and garb the shoe by the id in the params
// fetch('http://localhost:8000/api/v1/shoes/${this.props.match.params.id})
class ShoeCard extends Component {
    state = {
        shoes: []
    }

      componentDidMount() {
    this.getShoes()
  }

  getShoes = async () => {
    try {
      const shoeResponse = await fetch(`http://localhost:8000/api/v1/shoes/${this.props.match.params.id}`)
      
      const shoeParsed = await shoeResponse.json()
      console.log(shoeParsed)
      this.setState({
        shoes: shoeParsed
      })

    } catch(err) {
      console.log(err)
    }
  }
    render() {
        const { shoes } = this.state
        return(
            <div className="ShoeCard-Container">
            <h1>{shoes.brand}</h1>
            <h1>{shoes.name}</h1>
            <h1>{shoes.size}</h1>
            <h1>{shoes.price}</h1>
            </div>
        )
    }
}
export default withRouter(ShoeCard)