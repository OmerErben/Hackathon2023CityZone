import React from 'react';

const DriverListPage = () => {
    const drivers = [
        { id: 1, name: 'Amir Ben Izhak' },
        { id: 2, name: 'Itay Gonen' },
        { id: 3, name: 'Omer Erben' },
        // Add more drivers as needed
    ];

    return (
        <div>
            <h2>Driver List</h2>
            <ul>
                {drivers.map((driver) => (
                    <li key={driver.id}>{driver.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DriverListPage;
