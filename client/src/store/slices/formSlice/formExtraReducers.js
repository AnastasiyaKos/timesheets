import {createAsyncThunk} from "@reduxjs/toolkit";
import {appAPI} from "../../../api/apiApp";

export const getFormData = createAsyncThunk(
  'form/getFormData',
  async (data = {}, thunkAPI) => {
    return await appAPI.getDataById(data);
  }
);

export const getFormLists = createAsyncThunk(
  'form/getFormLists',
  async (data = {}, thunkAPI) => {
    let roles;
    switch (data.type) {
      case 'users':
        roles = await appAPI.getDataByType('roles');
        break;
      default:
        break;
    }
    return {roles};
  }
);

export const updateFormData = createAsyncThunk(
  'form/updateFormData',
  async (data = {}, thunkAPI) => {
    let roles;
    switch (data.type) {
      case 'users':
        roles = await appAPI.updateDataById(data);
        break;
      default:
        break;
    }
    return {roles};
  }
);


const extraReducers = {
  [getFormData.fulfilled]: (state, action) => {
    state.data.values = action.payload;
    state.data.action = 'view';
  },
  [getFormLists.fulfilled]: (state, action) => {
    state.data.lists = action.payload;
  },
};

export default extraReducers;