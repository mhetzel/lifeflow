import React from 'react';
import logo from './logo.svg';
import './App.css';
import load_moon_phases from './Moon';
import {useState} from 'react';


export default function App() {

  load_moon_phases()

  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState('Enter ');


  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    console.log(isActive)

    setButtonText(isActive ? 'Enter ': 'Exit ');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button className="button" onClick={handleClick}><span>{buttonText}</span></button>
        </div>
        <div style={{   
          display: isActive ? 'table' : 'none',
        }}
        id='moon'></div>

      </header>
    </div>
  );
}
