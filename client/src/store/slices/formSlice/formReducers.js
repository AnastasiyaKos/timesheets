import {initialState} from "./formSlice";

const reducers = {
  setFormAction: (state, action) => {
    state.data.action = action.payload
  },

  resetForm: (state, action) => {
    switch (action.payload) {
      case 'formData':
        state.data = initialState.data;
        break;
      default:
        break;
    }
  }
};

export default reducers;