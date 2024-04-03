import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Nav.css';
import { toast } from 'react-toastify';
import { CgMenu } from "react-icons/cg";

const Nav = () => {
    const auth = localStorage.getItem('auth');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth');
        toast.success("User logout successfully");
        navigate('/register');
    }


    return (
        <div className='nav'>
            <div className='nav-box'>
                {(auth && location.pathname !== '/login' && location.pathname !== '/register') ? <>
                    <ul className='nav-ul'>
                        <li><Link to="/info" title='company-info' className={`${location.pathname === '/info' ? "active" : ""}`} ><CgMenu /></Link></li>
                        <li><Link to="/" className={`${location.pathname === '/' ? "active" : ""}`} >Home</Link></li>
                        <li style={{float:'right'}}> <Link onClick={handleLogout} to="/login">Logout</Link> </li>
                    </ul>
                </>
                    :
                    <ul className='nav-ul nav-right'>
                        <li style={{float:'right'}} ><Link to="/register" className={`${location.pathname === '/register' ? "active" : ""}`}>Register</Link></li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Nav;