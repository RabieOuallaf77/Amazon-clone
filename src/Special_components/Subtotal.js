import React from 'react'
import CurrencyFormat from 'react-currency-format';

import '../styles/subtotal.css';

function Subtotal() {
    return(
        <div className='subtotal'>
            <CurrencyFormat
        value={1250}
        displayType={"text"}
        prefix={'$'}
        thousandSeparator={true}
        decimalScale={2}
        renderText={ (value) => (
            <>
            {/* show the total value */}
                <p>
                Subtotal (0 items) <strong> {value} </strong>
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