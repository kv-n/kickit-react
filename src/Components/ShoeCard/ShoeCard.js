import React, { Component } from 'react';

// extend class component
// component did mount and garb the shoe by the id in the params
// fetch('http://localhost:8000/api/v1/shoes/${this.props.match.params.id})
const ShoeCard = (props) =>
  <div className="ShoeCard-Container">
  {console.log(props)}
    <h1>Brand: {props.shoe.brand}</h1>
    <h1>{props.shoe.name}</h1>
    <div>{props.shoe.picture}</div>
    <h1>Size: {props.shoe.size}</h1>
    <h1>${props.shoe.price}</h1>
  </div>

  
export default ShoeCard