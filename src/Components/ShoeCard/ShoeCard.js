import React, { Component } from 'react';

const ShoeCard = (props) =>
  <div className="ShoeCard-Container">
    {console.log(props)}
    <h1 className="shoeCard">Brand: {props.shoe.brand}</h1>
    <h1 className="shoeCard">{props.shoe.name}</h1>
    <div className="shoeCard">{props.shoe.picture}</div>
    <h1 className="shoeCard">Size: {props.shoe.size}</h1>
    <h1 cclassName="shoeCard">${props.shoe.price}</h1>
  </div>

  
export default ShoeCard

