import logo from './logo.svg';
import AuthenticationPage from './AuthenticationPage';
import './App.css';
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const navigateToPassengers = () => {
        // 👇️ navigate to /contacts
        navigate('/PassengerListPage');
    };
    const navigateToDrivers = () => {
        // 👇️ navigate to /contacts
        navigate('/PassengerListPage');
    };
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
    };
    return (
        <div className="App">
            <h1>Welcome to TakeAway!</h1>
            <div className="container"> {/* Add the class name */}
              <AuthenticationPage />
            </div>
        </div>
    );
}

export default App;
