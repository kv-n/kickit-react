import React, { Component } from 'react';

const ShoeCard = (props) =>
  <div className="ShoeCard-Container">
    {console.log(props)}
    <h1 className="brand">Brand: {props.shoe.brand}</h1>
    <h1 className="name">{props.shoe.name}</h1>
    <div className="picture">{props.shoe.picture}</div>
    <h1 className="size">Size: {props.shoe.size}</h1>
    <h1 className="price">${props.shoe.price}</h1>
  </div>

  
export default ShoeCard

