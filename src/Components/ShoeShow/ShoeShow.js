import React, { Component } from 'react';


class ShoeShow extends Component {
    
    render() {
        console.log(this.props)
        return(
            <div className="ShoeShow-Container">
                {this.props.shoe.name}
            
            </div>
        )
    }
}


export default ShoeShow