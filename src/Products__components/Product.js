import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useStateValue } from '../Special_components/MyContext';
import '../styles/product.css';


function Product( {id,title, price, rating, img} ) {

  const [{basket} ,dispatch] = useStateValue()

  

  const AddtoBasket = () => {
    
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        img: img,
        rating: rating,
      },
      
    });
  };

  return (
  <div className='product'>
    {/* Product info (name, price) */}

    <div className='product__info'>
        <p> {title} </p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
    </div>

    {/* Product rating */}
    <div className='product__rating product__info' >
      <ReactStars />
    </div>

    {/* Product image */}

    <img
      src={img}
      alt='product img'
      className='product__image product__info'

    />
    
    {/* add to basket button */}
    
    <button onClick={AddtoBasket} >Add to basket</button>
  </div>
  )
}

export default Product