import { useReducer } from "react";
import { reducer, initialState } from "./Reducer";
import Header from "./Header";

const Game = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_GUESS", payload: e.target.value });
  };

  const handleGuess = () => {
    dispatch({ type: "SUBMIT_GUESS" });
  };

  return (
    <div>
      <Header dispatch={dispatch} gameStarted={state.gameStarted} />
      <p>{state.message}</p>

      <input
        type="number"
        value={state.input}
        onChange={handleInputChange}
        placeholder="Enter your guess"
        disabled={!state.gameStarted || state.status !== "guess"}
      />
      <button
        onClick={handleGuess}
        disabled={!state.gameStarted || state.status !== "guess"}
      >
        Guess
      </button>

      <p>Trials: {state.trials}</p>
    </div>
  );
};

export default Game;
