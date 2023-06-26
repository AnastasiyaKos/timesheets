import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appSlice/appSlice';
import sidebarReducer from "./slices/sidebarSlice/sidebarSlice";
import tableSlice from "./slices/tableSlice/tableSlice";
import formSlice from "./slices/formSlice/formSlice";


const store = configureStore({
  reducer: {
    app: appReducer,
    sidebar: sidebarReducer,
    table: tableSlice,
    form: formSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;