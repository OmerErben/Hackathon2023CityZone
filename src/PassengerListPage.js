import React, {useState} from 'react';
import { MdCheck } from 'react-icons/md';

const PassengerListPage = () => {
    const passengers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alex Johnson' },
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
            <ul>
                {passengers.map((passenger) => (
                    <li key={passenger.id}>
                        <span>{passenger.name + " "}</span>
                        <button
                            onClick={() => handleButtonClick(passenger.id)}
                            className={isPassengerSent(passenger.id) ? 'sent' : ''}>
                            {isPassengerSent(passenger.id) ? 'Cancel Match' : "Match!"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PassengerListPage;
