import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const handleDashboard = () => {
        navigate('/dashboard');
    }
    return (
        <>
            <button onClick={handleDashboard}>Dashboard</button>
        </>
    );
};

export default Home;
