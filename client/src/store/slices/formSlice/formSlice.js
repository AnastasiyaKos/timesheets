import {createSlice} from "@reduxjs/toolkit";
import reducers from "./formReducers";
import extraReducers from './formExtraReducers';

export const initialState = {
  data: {
    values: {
      // roles: {name: null}
    },
    action: window.location.pathname.includes("/add") ? "add" : "view",
    lists: {},
  },
  dialog: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers,
  extraReducers,
})


const formReducer = formSlice.reducer;

export const {setFormAction, resetForm} = formSlice.actions;

export default formReducer;