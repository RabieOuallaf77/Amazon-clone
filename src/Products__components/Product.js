import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useStateValue } from '../Special_components/MyContext';
import '../styles/product.css';


function Product( {title, price, rating, img} ) {

  const [dispatch] = useStateValue()

  

  const AddtoBasket = () => {
    // dispatch the item to the data layer
    
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title: title,
        price: price,
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
      src='https://m.media-amazon.com/images/I/41shZGS-G+L.jpg'
      alt='thinking fast and slow book cover'
      className='product__image product__info  '
    />
    
    {/* add to basket button */}
    
    <button onClick={AddtoBasket} >Add to basket</button>
  </div>
  )
}

export default Product