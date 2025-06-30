export type GameStatus = "guess" | "won" | "lost";

export type State = {
  target: number;
  trials: number;
  status: GameStatus;
  message: string;
  input: string;
  gameStarted: boolean;
};

export type Action =
  | { type: "SET_GUESS"; payload: string }
  | { type: "SUBMIT_GUESS" }
  | { type: "START_NEW_GAME" };

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const initialState: State = {
  target: getRandomNumber(),
  trials: 10,
  status: "guess",
  message: "Guess a number between 1 and 100. You have 10 tries.",
  input: "",
  gameStarted: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        input: action.payload,
      };

    case "SUBMIT_GUESS": {
      if (!state.gameStarted || state.status !== "guess") return state;

      const guess = +state.input;
      if (guess === state.target) {
        return {
          ...state,
          message: `You win with a score of ${state.trials * 10}%.`,
          status: "won",
          input: "",
        };
      }

      if (state.trials <= 1) {
        return {
          ...state,
          trials: 0,
          message: `Game Over! The number was ${state.target}.`,
          status: "lost",
          input: "",
        };
      }

      return {
        ...state,
        trials: state.trials - 1,
        message:
          guess < state.target ? "Too low! Try again." : "Too high! Try again.",
        input: "",
      };
    }

    case "START_NEW_GAME":
      return {
        target: getRandomNumber(),
        trials: 10,
        status: "guess",
        message: "Guess a number between 1 and 100. You have 10 tries.",
        input: "",
        gameStarted: true,
      };

    default:
      return state;
  }
};
