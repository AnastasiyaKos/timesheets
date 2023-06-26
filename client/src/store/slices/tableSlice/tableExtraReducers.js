import {createAsyncThunk} from "@reduxjs/toolkit";
import {appAPI} from "../../../api/apiApp";

export const getTableData = createAsyncThunk(
  'table/getTableData',
  async (data = {}, thunkAPI) => {
    // let {booking: {dataForm: {values}}} = thunkAPI.getState();
    //
    // switch (data.type) {
    //   case 'users':
    //     break;
    // }

    return await appAPI.getDataByType(data.type);
  }
);

const extraReducers = {
  [getTableData.fulfilled]: (state, action) => {
    state.data = action.payload;
  }
};

export default extraReducers;