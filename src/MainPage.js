import React from 'react';
import {Route, Routes, useHistory, useNavigate} from 'react-router-dom';
import PassengerListPage from './PassengerListPage';

const MainPage = () => {
    const navigate = useNavigate();
    const navigateToPassengers = () => {
        // 👇️ navigate to /contacts
        navigate('/PassengerListPage');
    };
    const navigateToDrivers = () => {
        // 👇️ navigate to /contacts
        navigate('/PassengerListPage');
    };
    return (
        <div>
            <h2>Welcome to the Main Page!</h2>
            <button onClick={navigateToPassengers}>Find Passengers</button>
            <button>Find a Driver</button>
            <Routes>
                <Route path="/PassengerListPage" element={<PassengerListPage />} />
            </Routes>
        </div>
    );
};

export default MainPage;
