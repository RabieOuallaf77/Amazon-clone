import React from 'react';
import ReactStars from 'react-rating-stars-component';
import '../styles/product.css';


function Product( {title, price, rating , image} ) {
  return (
  <div className='product'>
    {/* Product info (name, price) */}

    <div className='product__info'>
        <p> Thinking, Fast and Slow </p>
        <p className='product__price'>
            <small>$</small>
            <strong>29.99</strong>
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
    
    <button>Add to basket</button>
  </div>
  )
}

export default Product