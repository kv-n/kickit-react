import React from 'react';
import './ShoeCard.css'
import { Link } from 'react-router-dom'

const ShoeCard = (props) =>
    <div className="ShoeCard-Container">
      <div className="images">
        <img className="show-shoe" src={props.shoe.picture} alt="shoes" />
      </div>
      <div className="product">
        <h1 className="brand-name">{props.shoe.brand}</h1>
        <h1 className="name-type">{props.shoe.name}</h1>
        <h2 className="size">Size: {props.shoe.size}</h2>
        <h2 className="price">${props.shoe.price}</h2>
        <p className="desc">{props.shoe.description}</p>
        <div className="buttons">
        <button className="add">Add to Cart</button>
        <button className="like"><span>♥</span></button>
        <h6 className="name-type posted"> posted by: {props.shoe.user}</h6>
        {props.currentUser.id === props.shoe.created_by
        ?
        ( <div className='edit-button'>
          <button className="add"><Link to={`/shoes/${props.shoe.id}/edit`}>EDIT</Link></button>
          </div>
        )
        :
        (
          <div/>
        )
        }
      </div>
      </div>
    </div>

  
export default ShoeCard

