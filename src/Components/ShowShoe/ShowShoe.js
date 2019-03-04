import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './ShowShoe.css'

// extend class component
// component did mount and garb the shoe by the id in the params
// fetch(`http://${process.env.REACT_APP_API_URL}/api/v1/shoes/${this.props.match.params.id}`)
class ShowShoe extends Component {
    state = {
        shoes: {},
        users: {}
    }

      componentDidMount() {
    this.getShoes()
  }

  getShoes = async () => {
    try {
      const shoeResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/shoes/${this.props.match.params.id}`)
      
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
            // <ShoeCard shoes={shoes}/>
            <div>hello</div>
        )
    }
}


export default withRouter(ShowShoe)