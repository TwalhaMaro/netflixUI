import { useRef, useState, useEffect } from "react"
import "./register.scss"

export default function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleChange = () => {
        setEmail(emailRef.current.value);
    }

    const handleSubmit = event => {
        setPassword(passwordRef.current.value);
        event.preventDefault();
    }

    useEffect(() => {
        console.log(email);
      }, [email]);

      useEffect(() => {
        console.log(password);
      }, [password]);


  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />

                <button className="loginButton">Sign in</button>
            </div>
            
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                Ready to watch? Enter your email to create or restart your membership.
                </p>

                {email?
                    <form className="input">
                    <input type="password" placeholder="Password" ref={passwordRef}/>
                    <button className="registerButton" onClick={handleSubmit}>Sign Up</button>
                    </form>
                :
                    <div className="input">
                    <input type="email" placeholder="Email Address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleChange}>Get started</button>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}
