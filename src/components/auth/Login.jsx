import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if(!email || !password){
            setError(true);
            return false;
        }
        setError(false);

        const auth = JSON.parse(localStorage.getItem('auth'));
        if(auth.email === email && auth.password === password){
            toast.success("logged In Successfully");
            navigate("/");
        }else{
            toast.error("Invalid Credentials");
            console.log("toast.error")
        }
        setEmail("");
        setPassword("");
    }

    return (
        <div>

            <div className='content-box'>
                <h1>Login</h1>

                <form className='form-box' autoComplete="on">

                    <label htmlFor="email">Email</label>
                    <input className='inputBox' id="email" type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error && !email &&<span className='invalid-input'>Enter vaild a email</span>}


                    <label htmlFor="password">Password</label>
                    <input className='inputBox' id="password" type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && !password &&<span className='invalid-input'>Enter vaild a password</span>}


                    <button className='register-btn' onClick={handleLogin}>Login</button>
                </form>
                <div className='register-switch'>
                    <p>don't have account? <Link to="/register">Signup here</Link> </p>
                </div>

            </div>

        </div>
    )
}

export default Login;
