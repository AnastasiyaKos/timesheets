import {initialState} from "./tableSlice";

const reducers = {
  resetTable: (state, action) => {
    switch (action.payload) {
      case 'dataTable':
        state.data = initialState.data;
        break;
      default:
        break;
    }
  }
};

export default reducers;