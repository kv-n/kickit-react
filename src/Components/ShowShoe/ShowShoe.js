import React, { Component } from 'react';
import ShoeCard from '../ShoeCard/ShoeCard'
import { withRouter } from 'react-router-dom'

// extend class component
// component did mount and garb the shoe by the id in the params
// fetch('http://localhost:8000/api/v1/shoes/${this.props.match.params.id})
class ShowShoe extends Component {
    state = {
        shoes: {}
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
        console.log(shoes)
        return(
            <ShoeCard shoe={shoes} />
        )
    }
}
export default withRouter(ShowShoe)