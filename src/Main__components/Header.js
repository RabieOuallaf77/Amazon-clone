import React from 'react'
import  '../styles/header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Special_components/MyContext';



function Header() {
  const [{basket}] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
        <img 
          className='header__logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon logo'
        />
      </Link>      
      

      <div className='header__search'>

      {/* the search input area */}
        <input 
          className="header__searchIN"
          type="text"
        />

       {/*the search icon */}

      <SearchIcon 
        className="search__icon" 

      />

      </div>

      {/* nav options area */}

      <div className='nav__options__countainer'>

      {/* Option 1 */}
        <div className='header__option' >

          <span className='option__Ftext'>
            Hello
          </span>

          <span className='option__Stext'>
            singin!
          </span>

        </div>

      {/* Option 2 */}
        <div className='header__option' >

          <span className='option__Ftext'>
            Returns
          </span>
          
          <span className='option__Stext'>
            &Orders
          </span>

        </div>
      {/* Option 3 */}
        <div className='header__option' >

        <span className='option__Ftext'>
            Your
        </span>
          
        <span className='option__Stext'>
            Prime
        </span>

        </div>

      {/* Option 4 */}
        <div className='header__option' >

          {/* optionBasket icon */}
          <Link to="/checkout">
            <ShoppingBasketIcon 
              className='header__shoppingBasket'
            />
          </Link>

        </div>
        <span className='shoppingbasket__counter header__optionSpecial'>{basket?.length}</span>
        
      </div>

    </div>
  );
};

export default Header