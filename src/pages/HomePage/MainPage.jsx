import React from 'react';
import logo from '../../EnterIcon.png';
import './MainPage.css';
import { Link } from 'react-router-dom';
import '../../styles/Buttons.css';

const MainPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="le" />
                <p>
                    Welcome to this beautiful web app
                </p>
                
                <button className="button-clear button-default">
                    <Link to="/login">Login</Link>
                </button>

            </header>
        </div>
    )
}

export default MainPage;