import React, { Component } from 'react';

// extend class component
// component did mount and garb the shoe by the id in the params
// fetch('http://localhost:8000/api/v1/shoes/${this.props.match.params.id})
const ShoeCard = ({shoe}) =>
  <div className="ShoeCard-Container">
    <h1>Brand: {shoe.brand}</h1>
    <h1>{shoe.name}</h1>
    <div>{shoe.picture}</div>
    <h1>Size: {shoe.size}</h1>
    <h1>${shoe.price}</h1>
  </div>

  
export default ShoeCard