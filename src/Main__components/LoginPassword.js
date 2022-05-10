import React from 'react'
import { Link } from 'react-router-dom'

function LoginPassword() {
  return (
    <div className='login'>
    <Link to="/">
        <img 
            src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
            alt='amazon logo'
            className="login__logo"
        />
    </Link>

    <div className='login__container'>

        <div className='login__box'>

                {/* emil input */}

            <h1>sing-in</h1>
            <h5>password</h5>
            <input 
                type='password'
            />

                {/* singin button */}
            <Link to='/'>
                <button>Continue</button>
            </Link>
            

            
                </div>
        </div>
        
    </div>

    



  )
}

export default LoginPassword