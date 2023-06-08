import React, {useState} from 'react';

const DriverListPage = () => {
    const drivers = [
        { id: 1, name: 'Amir Ben Izhak', mutual_friends: "40", departure_time: "09:15", familiarity: "1st circle"},
        { id: 2, name: 'Itay Gonen', mutual_friends: "2", departure_time: "22:22", familiarity: "1st circle"},
        { id: 3, name: 'Omer Erben', mutual_friends: "30", departure_time: "15:30", familiarity: "2nd circle"},
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
            <h2>Driver List</h2>
            <ul>
                {drivers.map((driver) => (
                    <li key={driver.id}>
                        <span>{"Name: " + driver.name + " Departure: " + driver.departure_time + " Familiarity: " + driver.familiarity + " Number of Mutual Friends: " + driver.mutual_friends + " "}</span>
                        <button
                            onClick={() => handleButtonClick(driver.id)}
                            className={isDriverSent(driver.id) ? 'sent' : ''}>
                            {isDriverSent(driver.id) ? 'Cancel Match' : "Match!"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DriverListPage;
