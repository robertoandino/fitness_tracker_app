import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Header = () => {
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
                    <li>
                        <NavLink to="/profile" 
                        className={({ isActive }) => (isActive ? 'active-link' : '')}
                        >
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
