import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  ADD_GOAL,
  GET_GOALS,
} from "./actions";
import { initialState } from "./appContext";
const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      content: "",
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === ADD_GOAL) {
    return {
      ...state,
    };
  }
  if (action.type === GET_GOALS) {
    return {
      ...state,
      goals: action.payload.goals,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
