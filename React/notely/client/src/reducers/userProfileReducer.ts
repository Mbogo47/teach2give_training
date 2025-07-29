interface ProfileState {
  firstName: string;
  lastName: string;
  emailAddress: string;
  username: string;
  avatarImage: File | null;
  loading: boolean;
}

type ProfileAction =
  | { type: "SET_FIRSTNAME"; payload: string }
  | { type: "SET_LASTNAME"; payload: string }
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_AVATAR"; payload: File | null }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "RESET"; payload: ProfileState };

const initialProfileState: ProfileState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  username: "",
  avatarImage: null,
  loading: false,
};

const profileReducer = (
  state: ProfileState,
  action: ProfileAction,
): ProfileState => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_AVATAR":
      return { ...state, avatarImage: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "RESET":
      return { ...action.payload };
    default:
      return state;
  }
};

export { profileReducer, initialProfileState };

interface PasswordState {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  loading: boolean;
}

type PasswordAction =
  | { type: "SET_CURRENT"; payload: string }
  | { type: "SET_NEW"; payload: string }
  | { type: "SET_CONFIRM"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "RESET" };

const initialPasswordState: PasswordState = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  loading: false,
};

const passwordReducer = (
  state: PasswordState,
  action: PasswordAction,
): PasswordState => {
  switch (action.type) {
    case "SET_CURRENT":
      return { ...state, currentPassword: action.payload };
    case "SET_NEW":
      return { ...state, newPassword: action.payload };
    case "SET_CONFIRM":
      return { ...state, confirmPassword: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "RESET":
      return initialPasswordState;
    default:
      return state;
  }
};

export { passwordReducer, initialPasswordState };
