import React, { useState } from 'react';
import './PassengerListPage.css';
import logo from "./worker.png";

const PassengerListPage = () => {
    const passengersData = [
        { id: 1, name: 'John Doe', mutual_friends: "10", departure_time: "16:00", familiarity: "2nd Circle"},
        { id: 2, name: 'Jane Smith', mutual_friends: "5", departure_time: "19:37", familiarity: "1st Circle" },
        { id: 3, name: 'Alex Johnson', mutual_friends: "4", departure_time: "11:40", familiarity: "3rd Circle" },
        // Add more passengers as needed
    ];

    const [passengers, setPassengers] = useState(passengersData);
    const [sentPassengers, setSentPassengers] = useState([]);

    const handleButtonClick = (passengerId) => {
        const isAlreadySent = sentPassengers.includes(passengerId);

        if (isAlreadySent) {
            setSentPassengers(sentPassengers.filter((id) => id !== passengerId));
        } else {
            setSentPassengers([...sentPassengers, passengerId]);
        }
    };

    const isPassengerSent = (passengerId) => sentPassengers.includes(passengerId);

    return (
        <div className="passenger-list-container">
            <h2>Passenger List</h2>
            <ul className="passenger-list">
                {passengers.map((passenger) => (
                    <li key={passenger.id} className="passenger-item">
                        <img style={{maxWidth: "100px", maxHeight: "100px"}} src={logo} alt="fireSpot"/>
                        <span style={{marginLeft: "20px", textAlign: "left"}}>
                          <strong>Name:</strong> {passenger.name}<br />
                          <strong>Departure Time:</strong> {passenger.departure_time}<br />
                          <strong>Familiarity:</strong> {passenger.familiarity}<br />
                          <strong>Mutual Friends:</strong> {passenger.mutual_friends}
                        </span>
                        <button
                            onClick={() => handleButtonClick(passenger.id)}
                            className={`match-button ${isPassengerSent(passenger.id) ? 'sent' : ''}`}>
                            {isPassengerSent(passenger.id) ? 'Cancel Match' : 'Match!'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PassengerListPage;
