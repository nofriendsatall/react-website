import React, { useEffect } from 'react';
import './LogInPopUp.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const LogInPopUp = ({setShowLogin}) => {

    const {url,setToken} = React.useContext(StoreContext);

    const [currentState,setCurrentState] = React.useState("Sign Up");

    const [data,setData] = React.useState({
        user_name: "",
        name: "",
        phone_number: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(prevData => ({...prevData,[name]:value}));
        
    }

    useEffect(() => {
        console.log(data);
    },[data])

    const onLogin = async (event) => {
        event.preventDefault();

        let newUrl = url;
        let dataToSend;

        if (currentState === 'Log In') {
            newUrl += '/api/login';

            dataToSend = {
                email: data.email,  
                password: data.password
            };

        } else {
            newUrl += '/api/signup';
            dataToSend = {
                user_name: data.user_name,  
                name: data.name,
                phone_number: data.phone_number,
                email: data.email,
                password: data.password
            }
        }

        const response = await axios.post(newUrl,dataToSend);


        

        if (response.data.status === 'success') {
            setToken(response.data.result.access_token);
            localStorage.setItem("token",response.data.result.access_token);

            setShowLogin(false);

            console.log('success login frontend');
            
             
        } else {
            console.log(response.data);
            console.log('failed login frontend');
        }

    }


    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>

                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)}  />

                </div>

                <div className="login-popup-inputs">
                    {
                        currentState === 'Login' ? 
                        <></> :
                        <> 
                            <input type="text" name="name" onChange={onChangeHandler} value={data.name}  placeholder='Your Name' required />   
                            <input type="text" name="user_name" onChange={onChangeHandler} value={data.user_name}  placeholder='User Name' required />
                            <input type="tel" name="phone_number" onChange={onChangeHandler} value={data.phone_number}  placeholder='Phone Number' required />
                        </>
                    }
                    <input type="email" name="email" onChange={onChangeHandler} value={data.email}  placeholder='Your Email' />
                    <input type="password" name="password" onChange={onChangeHandler} value={data.password} required  placeholder='Password' /> 
                </div>

                <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Login" }</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the <span>Terms & Conditions</span></p>
                </div>

                {
                    currentState === "Login" ?
                    <p>Create a new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span> </p> :
                    <p>Already have a account? <span onClick={() => setCurrentState('Login')}>Login here</span> </p>
                }

            </form>
        </div>
    );
};

export default LogInPopUp;
