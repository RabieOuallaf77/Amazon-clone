import React from 'react';
import Product from '../Products__components/Product';
import Subtotal from '../Special_components/Subtotal';
import "../styles/checkout.css";


function Checkout() {
  return (
    <div className="checkout" >

        {/* this is the left side of the checkout page wich contains the products list*/}

        <div className="checkout__leftSide">

          <div className='checkout__basket'>
    
            <h2 className='checkout__title'>Your shoping cart :</h2>

          {/* Products list */}

            <Product />
            <Product />
            <Product />
            <Product />



          </div>

        </div>

        {/* this is the right side of the checkout page wich contains the total price */}

        
        <Subtotal />
        
        

    </div>
  )
}

export default Checkout