import React, { useState } from 'react';
import "../styles/checkoutProduct.css";
import ReactStars from 'react-rating-stars-component';
import { useStateValue } from '../Special_components/MyContext';

function CheckoutProduct( {img, title, price, id} ) {

  const [{bakset} , dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
 
    });
  };

  return (

    <div className='checkoutProduct'>
        {/* product image  */}
        
          <img
            src={img}
            alt='product img'
            className='checkoutProduct__img'
          />


        {/* Product info */}

        <div className='checkoutProduct__info'>
            
            <p className='checkoutProduct__title'>{title}</p>

            <p className='checkoutProduct__price'> 
                <small>$</small>
                <strong>{price}</strong> 
            </p>

            <span className='checkoutProduct__rating' ><ReactStars /></span>

            <button className='checkoutProduct__button' onClick={RemoveFromBasket} > Remove from basket </button>

        </div>

    </div>
  )
}

export default CheckoutProduct