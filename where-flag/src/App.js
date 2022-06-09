import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './NavBar/Navbar';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [isDay, setIsDay] = useState(false);

  const handleClick = () => { setIsDay(!isDay) }

  return (
    <div className={isDay ? "light-mode-bckg light-mode-text main-container" : "dark-mode-bckg dark-mode-text main-container"}>
      <BrowserRouter>
        <Navbar isDay={isDay} handleClick={handleClick} />
        <Main isDay={isDay} />
      </BrowserRouter>
    </div>
  );
}

export default App;