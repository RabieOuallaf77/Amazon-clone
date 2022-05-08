import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.css'



function Login() {
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
                <h5>Email or mobile phone number</h5>
                <input 
                    placeholder='Enter your email'
                    type='text'
                />

                    {/* password input */}

                <h5>password</h5>
                <input 
                    placeholder='Enter your password'
                    type='password'
                />
                </div>
                    {/* singin button */}
                    
                <button>Sing in</button>
            
        </div>
    </div>
  )
}

export default Login