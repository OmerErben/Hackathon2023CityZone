import React, { useState } from 'react';
import MainPage from './MainPage';

const AuthenticationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleToggleMode = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform authentication logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Mode:', isSignUp ? 'Sign Up' : 'Sign In');
        // You can add your authentication logic or API calls here
        // For simplicity, we are just logging the email, password, and mode to the console
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <MainPage />;
    }

    return (
        <div>
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}
                  style={{display: "flex", flexDirection: "column", flexWrap: "wrap",
                      alignContent: "center", justifyContent: "center", alignItems: "flex-start"}}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} style={{marginLeft: "34px"}}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} style={{marginLeft: "3px"}}/>
                </div>
                <button type="submit" style={{marginLeft: "40px", marginTop: "20px", width: "150px"}}>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </button>
            </form>
            <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button type="button" onClick={handleToggleMode}>
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
            </p>
        </div>
    );
};

export default AuthenticationPage;
