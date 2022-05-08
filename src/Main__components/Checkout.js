import React from 'react';
import CheckoutProduct from '../Products__components/CheckoutProduct';
import { useStateValue } from '../Special_components/MyContext';
import Subtotal from '../Special_components/Subtotal';
import "../styles/checkout.css";


function Checkout() {

  const [{basket}] = useStateValue()


  return (
    <div className="checkout" >

        {/* this is the left side of the checkout page wich contains the products list*/}

        <div className="checkout__leftSide">

          <div className='checkout__basket'>
    
            <h2 className='checkout__title'>Your shoping cart :</h2>

          {/* Products list */}

            
            {basket.map( item => 
              <>
                <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
               />
              </>
            )}


          </div>

        </div>

        {/* this is the right side of the checkout page wich contains the total price */}

        
        <Subtotal />
        
        

    </div>
  )
}

export default Checkout