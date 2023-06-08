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
            <h2>Please fill the fields below</h2>
            <div style={{flexWrap: "nowrap", flexDirection: "row-reverse", justifyContent: "center", left: "auto", right: "auto", display: "flex"}}>
                <form style={{marginLeft: "15px"}}>
                    <label>Destination </label>
                    <input type="text" id="name" placeholder="Destination"/>
                </form>
                <form style={{marginLeft: "15px"}}>
                    <label>Departure Time </label>
                    <input type="text" id="name" placeholder="Now"/>
                </form>
                <form style={{marginLeft: "15px"}}>
                    <label>Departure Location </label>
                    <input type="text" id="name" placeholder="My Current Location"/>
                </form>
            </div>
            <div>
                <button onClick={navigateToPassengers} style={{marginTop: "15px", marginLeft: "15px"}}>Find Passengers</button>
                <button onClick={navigateToDrivers} style={{marginTop: "15px", marginLeft: "15px"}}>Find a Driver</button>
            </div>
            <Routes>
                <Route path="/PassengerListPage" element={<PassengerListPage />} />
                <Route path="/DriverListPage" element={<DriverListPage />} />
            </Routes>
        </div>
    );
};

export default MainPage;
