import React from 'react';
import './LogInPopUp.css';
import { assets } from '../../assets/frontend_assets/assets';

const LogInPopUp = ({setShowLogin}) => {

    const [currentState,setCurrentState] = React.useState("Sign Up");

    


    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>

                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)}  />

                </div>

                <div className="login-popup-inputs">
                    {currentState === 'Log In' ? <></> : <input type="text" name="" id="" placeholder='Your Name' required /> }
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <input type="password" name="" id="" placeholder='Password' /> 
                </div>

                <button>{currentState === "Sign Up" ? "Create Account" : "Log In" }</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the <span>Terms & Conditions</span></p>
                </div>

                {
                    currentState === "Log In" ?
                    <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span> </p> :
                    <p>Already have a account? <span onClick={() => setCurrentState('Log In')}>Login here</span> </p>
                }

            </form>
        </div>
    );
};

export default LogInPopUp;
