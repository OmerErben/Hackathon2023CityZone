import React, {useState} from 'react';
import './PassengerListPage.css';

const PassengerListPage = () => {
    const passengers = [
        { id: 1, name: 'John Doe', mutual_friends: "10", departure_time: "16:00", familiarity: "2nd circle"},
        { id: 2, name: 'Jane Smith', mutual_friends: "5", departure_time: "19:37", familiarity: "1st circle" },
        { id: 3, name: 'Alex Johnson', mutual_friends: "4", departure_time: "11:40", familiarity: "3rd circle" },
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
            <span>
              <strong>Name:</strong> {passenger.name}<br />
              <strong>Departure:</strong> {passenger.departure_time}<br />
              <strong>Familiarity:</strong> {passenger.familiarity}<br />
              <strong>Number of Mutual Friends:</strong> {passenger.mutual_friends}
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
