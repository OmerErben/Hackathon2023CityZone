import './PassengerListPage.css';
import logo from "./worker.png";
import party from "./vecteezy_realistic-multicolored-confetti-vector-for-the-festival_9345314_176.png"

const SuccessPage = () => {
    const matches = [
        { id: 1, name: 'John Doe', mutual_friends: "10", departure_time: "16:00", familiarity: "2nd Circle"}
        // Add more passengers as needed
    ];

    return (
        <div className="passenger-list-container">
            <h2>You Have Been Matched!</h2>
            <h4>Your Match is:</h4>
            <ul className="passenger-list">
                {matches.map((passenger) => (
                    <li key={passenger.id} className="passenger-item"
                        style={{display: "flex", flexWrap: "nowrap", flexDirection: "row",
                                alignContent: "stretch", justifyContent: "center"}}>
                        <img style={{maxWidth: "100px", maxHeight: "100px"}} src={logo} alt="fireSpot"/>
                        <span style={{marginLeft: "20px", textAlign: "left"}}>
                          <strong>Name:</strong> {passenger.name}<br />
                          <strong>Departure Time:</strong> {passenger.departure_time}<br />
                          <strong>Familiarity:</strong> {passenger.familiarity}<br />
                          <strong>Mutual Friends:</strong> {passenger.mutual_friends}
                        </span>
                    </li>
                ))}
            </ul>
            <img style={{maxWidth: "1000px", maxHeight: "1000px"}} src={party} alt="fireSpot"/>
        </div>
    );
};

export default SuccessPage;
