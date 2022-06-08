import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './NavBar/Navbar';
import Filter from './Filter/Filter';
import FlagListContainer from './FlagContainer/FlagListContainer';

function App() {

  const [isDay, setIsDay] = useState(false);

  const handleClick = () => { setIsDay(!isDay) }

  return (
    <div className={isDay ? "light-mode-bckg light-mode-text main-container" : "dark-mode-bckg dark-mode-text main-container"}>
      <Navbar isDay={isDay} handleClick={handleClick} />
      <FlagListContainer isDay={isDay} />
    </div>
  );
}

export default App;