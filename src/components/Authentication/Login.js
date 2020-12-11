import React, {useState} from 'react'; 
import "./Login.css"; 
import {Link} from "react-router-dom";

function Login() {

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const signIn = e => {
        e.preventDefault(); 


    }

    const register = e => {
        e.preventDefault(); 

    }

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
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/> 

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/> 

                    <button type="submit" onClick={signIn} className="signIn_button">Sign-In</button>
                </form>

                <small className="login_checkbox">
                <input type="checkbox" /> Keep me signed-in. 
              </small>

                <p>
                    By signing-in, you agree to <b>Amazon's Clone Conditions of Use & Sale</b>. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice. 
                </p>

                <button onClick={register} className="register_button">Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login; 
