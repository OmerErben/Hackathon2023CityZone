import React, { useState } from 'react';
import MainPage from './MainPage';
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import spotify from "./spotify.png";

const AuthenticationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [artist, setArtist] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleArtistChange = (e) => {
        setArtist(e.target.value);
    };

    const handleAgedChange = (e) => {
        setAge(e.target.value);
    };

    const handleToggleMode = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Mode:', isSignUp ? 'Sign Up' : 'Sign In');
        console.log('Age:', age);
        console.log('Address:', address);
        console.log('Favorite Artist:', artist);
        console.log('Name', name)
        // Todo: Add authentication api logic if there's time
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        return <MainPage />;
    }

    return (
        <div>
            {isSignUp ? (<div> <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                <form onSubmit={handleSubmit}
                      style={{display: "flex", flexDirection: "column", flexWrap: "wrap",
                          alignContent: "center", justifyContent: "center", alignItems: "flex-start"}}>
                    <div style={{marginTop: "5px"}}>
                        <label>Name:</label>
                        <input value={name} onChange={handleNameChange} style={{marginLeft: "60px"}}/>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} style={{marginLeft: "64px"}}/>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <label>Address:</label>
                        <input value={address} onChange={handleAddressChange} style={{marginLeft: "43px"}}/>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <label>Age:</label>
                        <input value={age} onChange={handleAgedChange} style={{marginLeft: "75px"}}/>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <label>Favorite Artist:</label>
                        <input value={artist} onChange={handleArtistChange} style={{marginLeft: "3px"}}/>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} style={{marginLeft: "33px"}}/>
                    </div>
                    <div>
                        <img style={{maxWidth: "50px", maxHeight: "50px", marginBottom:"9px"}} src={facebook} alt="fireSpot"/>
                        <img style={{maxWidth: "100px", maxHeight: "100px"}} src={instagram} alt="fireSpot"/>
                        <img style={{maxWidth: "50px", maxHeight: "50px", marginBottom:"10px"}} src={spotify} alt="fireSpot"/>
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
                </p> </div>) : (<div>
                <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}
                  style={{display: "flex", flexDirection: "column", flexWrap: "wrap",
                      alignContent: "center", justifyContent: "center", alignItems: "flex-start"}}>
                <div style={{marginTop: "5px"}}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} style={{marginLeft: "34px"}}/>
                </div>
                <div style={{marginTop: "5px"}}>
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
            </p> </div> )}
        </div>
    );
};

export default AuthenticationPage;
