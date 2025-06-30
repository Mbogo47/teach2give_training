import React from "react";
import { Action } from "./Reducer";

type HeaderProps = {
  dispatch: React.Dispatch<Action>;
  gameStarted: boolean;
};

const Header: React.FC<HeaderProps> = ({ dispatch, gameStarted }) => {
  const handleStartNewGame = () => {
    if (!gameStarted) {
      dispatch({ type: "START_NEW_GAME" });
    }
  };

  return (
    <header>
      <h2>Number Guessing Game</h2>
      <button onClick={handleStartNewGame} disabled={gameStarted}>
        New Game
      </button>
    </header>
  );
};

export default Header;
