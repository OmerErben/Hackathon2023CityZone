import React from 'react';
import {Route, Routes, useHistory, useNavigate} from 'react-router-dom';
import PassengerListPage from './PassengerListPage';
import DriverListPage from "./DriverListPage";
import App from "./App";

const MainPage = () => {
    const navigate = useNavigate();
    const navigateToPassengers = () => {
        // 👇️ navigate to /contacts
        navigate('/PassengerListPage');
    };
    const navigateToDrivers = () => {
        // 👇️ navigate to /contacts
        navigate('/DriverListPage');
    };
    let cancel = false;
    return (
        <div>
            <h2>Welcome to the Main Page!</h2>
            <button onClick={navigateToPassengers}>Find Passengers</button>
            <button onClick={navigateToDrivers}>Find a Driver</button>
            <Routes>
                <Route path="/PassengerListPage" element={<PassengerListPage />} />
                <Route path="/DriverListPage" element={<DriverListPage />} />
            </Routes>
        </div>
    );
};

export default MainPage;
