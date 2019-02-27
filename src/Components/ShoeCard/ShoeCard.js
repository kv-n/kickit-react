import React, { Component } from 'react';
import './ShoeCard.css'

const ShoeCard = (props) =>
    <div className="ShoeCard-Container">
      <h1 className="shoeCard">Brand: {props.shoe.brand}</h1>
      <h1 className="shoeCard">{props.shoe.name}</h1>
      <div className="shoeCard">{props.shoe.picture}</div>
      <h1 className="shoeCard">Size: {props.shoe.size}</h1>
      <h1 className="shoeCard">${props.shoe.price}</h1>
    </div>

  
export default ShoeCard

