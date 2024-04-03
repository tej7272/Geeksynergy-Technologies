import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { toast } from 'react-toastify';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [profession, setProfession] = useState("");
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const numericValue = value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (name === 'phone') {
            formattedValue = numericValue.slice(0, 10);
            setPhone(formattedValue);
        }
    }
    

    const handleSignup = async (e) => {
        
        e.preventDefault();
        if(!name || !email || !password || !phone || !profession){
            setError(true);
            return false;
        }
        setError(false);

        if(!email.includes('@gmail.com')){
            setError(true)
            setEmailError(true);
            return false;
        }

        const userData = {
            name,
            email,
            password,
            phone,
            profession
        }
        localStorage.setItem('auth',JSON.stringify(userData));
        navigate("/login");
        toast.success("Account Created Successfully!");
    }

    return (
        <div className='container'>
            <div className='content-box'>
                <h1>Sign Up</h1>

                <form className='form-box' autoComplete="on">

                    <label htmlFor='name'>Name</label>
                    <input className='inputBox' id="name" type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    {error && !name &&<span className='invalid-input'>Enter vaild a name</span>}

                    <label htmlFor="email">Email</label>
                    <input className='inputBox' id="email" type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error && (!email || emailError) &&<span className='invalid-input'>Enter vaild a email</span>}
                    
                    <label htmlFor="Phone">Phone Number</label>
                    <input className='inputBox' id="phone" type='text' placeholder='Enter Phone Number' name='phone' value={phone} onChange={handleInputChange} />
                    {error && !phone &&<span className='invalid-input'>Enter vaild a Phone</span>}

                    <label>Profession : </label>
                    <select value={profession} onChange={(e)=> setProfession(e.target.value)}>
                        <option value={""} defaultChecked>select your Profession</option>
                        <option value={"student"}>Student</option>
                        <option value={"professor"}>Professor/Teacher</option>
                        <option value={"employed"}>Employeed/Business Owner</option>
                        <option value={"doctor"}>Doctor</option>
                    </select>
                    {error && !profession &&<span className='invalid-input'>Select Your Profession</span>}


                    <label htmlFor="password">Password</label>
                    <input className='inputBox' id="password" type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && !password &&<span className='invalid-input'>Enter vaild a password</span>}


                    <button className='register-btn' type='button' onClick={handleSignup}>Sign up</button>
                </form>

            </div>
        </div>
    )
}

export default Register;