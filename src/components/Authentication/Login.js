import React, {useState} from 'react'; 
import "./Login.css"; 
import {Link, useHistory}  from "react-router-dom";
import {auth} from "../../firebase";

function Login() {
    const history = useHistory(); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const signIn = e => {
        e.preventDefault(); 

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/"); 
            })
            .catch(error => alert(error.message)); 
    }

    const register = e => {
        e.preventDefault(); 

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    history.push("/"); 
                }
            })
            .catch(error => alert(error.message)); 
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
                    By signing-in, you agree to <b>Amazon's Clone</b> Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice. 
                </p>

                <button onClick={register} className="register_button">Create your Amazon Account</button>

            </div>

            <div className="grey_bottom">

                <div className="footer_top">
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>     

                <div className="footer_bottom">
                    <p>© 1996-2020, AmazonClone.com, Inc. or its affiliates</p>
                </div>

            </div>
        </div>
    )
}

export default Login; 
