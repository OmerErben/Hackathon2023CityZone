import React, {useState} from 'react';
import './PassengerListPage.css';
import logo from "./worker.png";

const DriverListPage = () => {
    const drivers = [
        { id: 1, name: 'Amir Ben Izhak', mutual_friends: "40", departure_time: "09:15", familiarity: "1st Circle"},
        { id: 2, name: 'Itay Gonen', mutual_friends: "2", departure_time: "22:22", familiarity: "1st Circle"},
        { id: 3, name: 'Omer Erben', mutual_friends: "30", departure_time: "15:30", familiarity: "2nd Circle"},
        // Add more drivers as needed
    ];

    const [sentDrivers, setSentDrivers] = useState([]);

    const handleButtonClick = (driverId) => {
        // Check if the passenger has already been marked as sent
        const isAlreadySent = sentDrivers.includes(driverId);

        if (isAlreadySent) {
            // If already sent, remove the passenger from the sentPassengers array
            setSentDrivers(sentDrivers.filter((id) => id !== driverId));
        } else {
            // If not sent, add the passenger to the sentPassengers array
            setSentDrivers([...sentDrivers, driverId]);
        }
    };

    const isDriverSent = (driverId) => sentDrivers.includes(driverId);

    return (
        <div className="passenger-list-container">
            <h2>Drivers List</h2>
            <ul className="passenger-list">
                {drivers.map((driver) => (
                    <li key={driver.id} className="passenger-item">
                        <img style={{maxWidth: "100px", maxHeight: "100px"}} src={logo} alt="React Logo"/>
                        <span style={{marginLeft: "20px" ,textAlign: "left"}}>
                          <strong>Name:</strong> {driver.name}<br />
                          <strong>Departure Time:</strong> {driver.departure_time}<br />
                          <strong>Familiarity:</strong> {driver.familiarity}<br />
                          <strong>Mutual Friends:</strong> {driver.mutual_friends}
                        </span>
                        <button
                            onClick={() => handleButtonClick(driver.id)}
                            className={`match-button ${isDriverSent(driver.id) ? 'sent' : ''}`}>
                            {isDriverSent(driver.id) ? 'Cancel Match' : 'Match!'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriverListPage;
