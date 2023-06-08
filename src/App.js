import AuthenticationPage from './AuthenticationPage';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Welcome to PalPool!</h1>
            <div className="container"> {/* Add the class name */}
              <AuthenticationPage />
            </div>
        </div>
    );
}

export default App;
