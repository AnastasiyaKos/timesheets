import {createSlice} from '@reduxjs/toolkit';
import {handlerData} from '../../../services/handlerData.service';
import reducers from './appReducers';
// import {handlerLocalStorage} from "../../../services/handlerLocalStorage.service";


const {getAppText} = handlerData();
// const {get} = handlerLocalStorage();

export const initialState = {
  appText: getAppText(),
  // token: get('token'),
  tokenForResetPassword: null,
  // roles: get('roles'),
  progress: false,
  toast: {
    open: false,
  },
  modal: {
    open: false,
  },
  table: {
    page: 0,
    selected: [],
    nestedRowSelected: [],
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers,
})

const appReducer = appSlice.reducer;

export const {
  setTokenApp,
  setProgress,
  setToast,
  setModal,
  resetAppState,
  setTable,
  setTokenForResetPassword
} = appSlice.actions;

export default appReducer;