import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "./Login.css";
import { auth } from './Firebase';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const singin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))


    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon"></img>

            </Link>
            <div className="login__container">
                <h1>Sing-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__singInButton" type="submit" onClick={singin}>Sing In</button>

                </form>
                <p>By sing-in in you agree to Amazon Fake clone Conditions of Use &
                    Sale.Please see our Privacy Notice,our Cookies Notice and our Interest-based Adds Notice.


                </p>
                <button className="login__registerButton" onClick={register}>Create Your Amazon Account </button>
            </div>
        </div>
    );
}

export default Login;
