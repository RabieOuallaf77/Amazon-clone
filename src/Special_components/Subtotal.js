import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../styles/subtotal.css';
import { useStateValue } from './MyContext';
import { getBasketTotal } from './reducer';

function Subtotal() {
    
    const [{basket}] = useStateValue()
    

    return(
        <div className='subtotal'>
            <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={'$'}
        thousandSeparator={true}
        decimalScale={2}
        renderText={ (value) => (
            <>
            {/* show the total value */}
                <p>
                Subtotal ({basket.length} items) <strong> {value} </strong>
                </p>
            {/* checkbox line */}
                <small className="subtotal__gift">
                    <input type={"checkbox"}  /> the inbox contains a gift
                </small>


                <button>button</button>

            </>                    
        )}
        />
        </div>
    )
     
  
}

export default Subtotal