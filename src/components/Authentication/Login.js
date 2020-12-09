import React from 'react'; 
import "./Login.css"; 
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <hr className="logo_line" /> 

                <form>
                    <h5>E-mail</h5>
                    <input type="text" /> 

                    <h5>Password</h5>
                    <input type="password" /> 

                    <button className="signIn_button">Sign-In</button>
                </form>
                
                <p>
                    By signing-in, you agree to <b>Amazon's Clone</b> Conditions of Use & Sale . Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice. 
                </p>

                <button className="register_button">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login; 
