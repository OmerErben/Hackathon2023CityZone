import React from 'react';

const PassengerListPage = () => {
    const passengers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alex Johnson' },
        // Add more passengers as needed
    ];

    return (
        <div>
            <h2>Passenger List</h2>
            <ul>
                {passengers.map((passenger) => (
                    <li key={passenger.id}>{passenger.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PassengerListPage;
