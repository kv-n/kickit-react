import React from 'react'; 
import './PayPage.css'


const PayPage = () => {
    return(
        <div className="Pay-Container">
            <form className="pay-form-flex">
            <h1 className="pay-header">PayPal</h1>
            <label>
              <input  type='text' name='username' placeholder="Shipping" autoComplete="off"/>
            </label>
            <label>
              <input  type='email' name='email' placeholder="Billing"  autoComplete="off"/>
            </label>
            <label>
              <input  className="input-margin" type='password' name='password' placeholder="Card info" autoComplete="off"/>
            </label>
            <button className="checkout-btn" type='submit'>Checkout</button>
          </form>
        </div>
    )
}


export default PayPage