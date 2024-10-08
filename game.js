import React, { useState } from 'react';

const Game = () => {
  const [isCasting, setIsCasting] = useState(false);
  const [caughtFish, setCaughtFish] = useState(null);

  const castLine = () => {
    setIsCasting(true);
    setTimeout(() => {
      setIsCasting(false);
      const fish = Math.random() > 0.5 ? 'Bass' : 'Trout';
      setCaughtFish(fish);
    }, 2000);
  };

  return (
    <div id="game-container">
      <h2>{isCasting ? 'Casting...' : caughtFish ? `You caught a ${caughtFish}!` : 'Catch a fish!'}</h2>
      <button onClick={castLine} disabled={isCasting}>
        {isCasting ? 'Waiting for fish...' : 'Cast Line'}
      </button>
    </div>
  );
};

export default Game;
