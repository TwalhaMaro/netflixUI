import { Link } from 'react-router-dom';
import './login.scss';
//import { useRef, useState, useEffect } from "react"

export default function Register() {

  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
            
            <div className="container">
                <form>
                    <h1>Sign in</h1>
                    <input type="email" placeholder='Email Address'/>
                    <input type="password" placeholder='Password'/>
                    <button className="loginButton">Sign In</button>
                    <span>
                        New to Netflix?
                        <Link to={'/register'} className='link'>
                            <b>Sign up now.</b>
                        </Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. 
                        <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    </div>
  )
}
