import React from 'react';
import Product from '../Products__components/Product';
import Subtotal from '../Special_components/Subtotal';
import "../styles/checkout.css";


function Checkout() {
  return (
    <div className="checkout__container" >

        {/* this is the upper side of the checkout page wich contains the products list*/}

        <div className='checkout__UPside'>
            <div className='checkout__title'>

                <h2 className='checkout__title'>Your shoping cart</h2>
                {/* Products list */}

                <Product />

            </div>
        </div>

        {/* this is the down side of the checkout page wich contains the total price */}

        
        <Subtotal  />
        
        

    </div>
  )
}

export default Checkout