import React, { Component } from 'react';
import './ShoeCard.css'

const ShoeCard = (props) =>
    <div className="ShoeCard-Container">
      <div className="images">
        <img src={props.shoe.picture} />
      </div>
      <div className="product">
        <h1 className="brand-name">{props.shoe.brand}</h1>
        <h1 className="name-type">{props.shoe.name}</h1>
        <h2 className="size">Size: {props.shoe.size}</h2>
        <h2 className="price">${props.shoe.price}</h2>
        <p className="desc">{props.shoe.description}</p>
        <div class="buttons">
        <button class="add">Add to Cart</button>
        <button class="like"><span>♥</span></button>
      </div>
      </div>
    </div>

  
export default ShoeCard

