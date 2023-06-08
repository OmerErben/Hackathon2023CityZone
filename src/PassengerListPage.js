import React, {useState} from 'react';
import './PassengerListPage.css';
import logo from "./worker.png";

const PassengerListPage = () => {
    const passengers = [
        { id: 1, name: 'John Doe', mutual_friends: "10", departure_time: "16:00", familiarity: "2nd Circle"},
        { id: 2, name: 'Jane Smith', mutual_friends: "5", departure_time: "19:37", familiarity: "1st Circle" },
        { id: 3, name: 'Alex Johnson', mutual_friends: "4", departure_time: "11:40", familiarity: "3rd Circle" },
        // Add more passengers as needed
    ];

    const [sentPassengers, setSentPassengers] = useState([]);

    const handleButtonClick = (PassengerId) => {
        // Check if the passenger has already been marked as sent
        const isAlreadySent = sentPassengers.includes(PassengerId);

        if (isAlreadySent) {
            // If already sent, remove the passenger from the sentPassengers array
            setSentPassengers(sentPassengers.filter((id) => id !== PassengerId));
        } else {
            // If not sent, add the passenger to the sentPassengers array
            setSentPassengers([...sentPassengers, PassengerId]);
        }
    };

    const isPassengerSent = (PassengerId) => sentPassengers.includes(PassengerId);

    return (
        <div className="passenger-list-container">
            <h2>Passenger List</h2>
            <ul className="passenger-list">
                {passengers.map((passenger) => (
                    <li key={passenger.id} className="passenger-item">
                        <img style={{maxWidth: "100px", maxHeight: "100px"}} src={logo} alt="fireSpot"/>
                        <span style={{marginLeft: "20px" ,textAlign: "left"}}>
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
