import React, {useState} from 'react';
import { MdCheck } from 'react-icons/md';

const PassengerListPage = () => {
    const passengers = [
        { id: 1, name: 'John Doe', mutual_friend: "10", departure_time: "16:00", familiarity: "2nd circle"},
        { id: 2, name: 'Jane Smith', mutual_friend: "5", departure_time: "19:37", familiarity: "1st circle" },
        { id: 3, name: 'Alex Johnson', mutual_friend: "4", departure_time: "11:40", familiarity: "3rd circle" },
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
                        <span>{"Name: " + passenger.name + " Departure: " + passenger.departure_time + " Familiarity: " + passenger.familiarity + " Number of Mutual Friends: " + passenger.mutual_friends + " "}</span>
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
