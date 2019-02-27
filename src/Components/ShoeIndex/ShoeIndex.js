import React, { Component } from 'react';
import ShoeCard from '../ShoeCard/ShoeCard'
import './ShoeIndex.css'

class ShoesIndex extends Component {
    state = {
        shoes: []
    }

    async componentDidMount () {
        try {
            const shoeResponse = await fetch(`http://localhost:8000/api/v1/shoes`)
            
            const shoeParsed = await shoeResponse.json()
            console.log(shoeParsed)
            this.setState({
              shoes: shoeParsed.shoes
            })
      
          } catch(err) {
            console.log(err)
          }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1 className="shoe-index-header">KickIt</h1>
                {
                    this.state.shoes.map((s, i) => 
                        <ShoeCard shoe={s} key={i} />    
                    )
                } 
            </div>
        )
    }
}


export default ShoesIndex






