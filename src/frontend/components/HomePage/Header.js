import React, {useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Home.css';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate('/')
    }

    const handleLogin = () => {
        navigate('/login');
    }


    return (
        <header className="header">
            <h1>Fitness Tracker</h1>
            <nav>
                <ul className="header-nav-links"> 
                    <li>
                        <NavLink to="/" 
                         className={({ isActive }) => (isActive ? 'active-link' : '')}
                         >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/log-workout"
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Log Workout
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/progress" 
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Progress
                        </NavLink>
                    </li>
                    {isAuthenticated ? (
                        <>
                            <li>
                                <NavLink to="/profile" 
                                className={({ isActive }) => (isActive ? 'active-link' : '')}
                                >
                                Profile
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button onClick={handleLogin}>Login</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
