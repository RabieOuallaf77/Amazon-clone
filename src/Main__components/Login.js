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
                    type='text'
                />

                    {/* singin button */}
                <Link to='password'>
                    <button>Continue</button>
                </Link>
                

                
            </div>
            {/* Dont forget to add a footer later!! */}
        </div>
    </div>
  )
}

export default Login