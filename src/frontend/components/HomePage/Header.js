import React from 'react';
import './Home.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Fitness Tracker</h1>
            <nav>
                <ul className="header-nav-links"> 
                    <li>Home</li>
                    <li>Log Workout</li>
                    <li>View Progress</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
