import React from 'react';
import { useState } from 'react';
import axios from 'axions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
        } catch (err) {
            console.error(err);
            alert('Login failed');
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
        </div>
    );
};

export default Login;