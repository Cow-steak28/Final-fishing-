import React, { useState } from 'react';
import './style.css';
import Game from './components/Game';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div>
      <h1>Fishing Planet Clone</h1>
      {!gameStarted ? (
        <button id="start-button" onClick={handleStartGame}>Start Game</button>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
