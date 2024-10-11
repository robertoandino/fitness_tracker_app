import React from 'react';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

const Login = ({ loginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setToken(response.data.token);
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('userId', response.data.user.id);
            //alert('Login successful!');
            navigate('/profile');
            loginSuccess(response.data.token);
        } catch (err) {
            console.error(err);
            //alert('Login failed');
            alert('Login will only work with backend running. READ README')
        }
    };

    return (
        <div>
            <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            <p>Dont have an account? <NavLink to="/register">Register here</NavLink></p>
        </div>
    );
};

export default Login;