import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {auth , db} from '../firebase';
import '../styles/login.css'



function Login() {

    // Storing user's data

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

 
    // to not refresh the page
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then( (auth) => {
                console.log(auth);
            })
            .catch(error => alert(error.message));
    };
 
    const login = e => {
        e.preventDefault();
    };

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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            

                    {/* password input */}
                <h5>password</h5>
                <input 
                    type='password'
                    value={password}
                    onChange={ (e) => setPassword(e.target.value)}
                />

                    {/* singin button */}
                <Link to='/'>
                    <button onClick={Login}>Continue</button>
                </Link>

                
            </div>
        </div>
    </div>
  )
}

export default Login