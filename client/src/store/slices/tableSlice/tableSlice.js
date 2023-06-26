import {createSlice} from "@reduxjs/toolkit";
import reducers from "./tableReducers";
import extraReducers from './tableExtraReducers';

export const initialState = {
  data: [],
  paramsTable: {
    pageNumber: 0,
    pageSize: 100,
  },
  dialog: {},
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers,
  extraReducers,
})


const tableReducer = tableSlice.reducer;

export const {resetTable} = tableSlice.actions;

export default tableReducer;