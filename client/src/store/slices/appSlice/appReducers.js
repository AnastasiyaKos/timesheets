// import { handlerData } from "../../../services/handlerData.service";
// import { handlerLocalStorage } from "../../../services/handlerLocalStorage.service";
import {initialState} from "./appSlice";

// const { remove } = handlerLocalStorage();

const reducers = {

  setTokenApp(state, action) {
    if (!action.payload) {
      // remove("token");
      // remove("roles");
      state.roles = action.payload;
    }
    state.token = action.payload;
  },

  setTokenForResetPassword(state, action) {
    state.tokenForResetPassword = action.payload;
  },

  setProgress(state, action) {
    state.progress = action.payload;
  },

  setToast(state, action) {
    state.toast = action.payload;
  },

  setModal(state, action) {
    state.modal = action.payload;
  },

  setTable(state, action) {
    state.table[action.payload.key] = action.payload.value;
  },

  resetAppState(state, action = {}) {
    switch (action.payload) {
      case "table":
        state.table = initialState.table;
        break;

      default:
        return initialState;
    }
  },
};

export default reducers;
