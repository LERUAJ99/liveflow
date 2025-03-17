import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://liveflowserverapp.vercel.app/')
            .then(response => response.text())
            .then(responseData => setData(responseData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {data ? (
                    <p>{data}</p> // Display the text data
                ) : (
                    <p>Loading data...</p>
                )}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;