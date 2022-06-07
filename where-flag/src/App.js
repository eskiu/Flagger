import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './NavBar/Navbar';
import Filter from './Filter/Filter';
import FlagContainer from './FlagContainer/FlagContainer';

function App() {

  const [isDay, setIsDay] = useState(false);

  const handleClick = () => { setIsDay(!isDay) }

  return (
    <div className={isDay ? "light-mode-bckg light-mode-text main-container" : "dark-mode-bckg dark-mode-text main-container"}>
      <Navbar isDay={isDay} handleClick={handleClick} />
      <Filter isDay={isDay} />
      <FlagContainer />
    </div>
  );
}

export default App;