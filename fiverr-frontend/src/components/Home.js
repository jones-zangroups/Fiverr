//fiverr-frontend/src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Welcome to Fiverr Clone</h1>
            <button onClick={() => navigate('/register')}>Sign Up</button>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    );
};

export default Home;
