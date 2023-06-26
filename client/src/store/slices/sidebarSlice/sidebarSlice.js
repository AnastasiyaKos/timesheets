import { createSlice } from "@reduxjs/toolkit";
import { handlerData } from "../../../services/handlerData.service";
import reducers from "./sidebarReducers";
import extraReducers from "./sidebarExtraReducers";

const { getNavListData } = handlerData();

export const initialState = {
  profile: {
    action: "view",
    open: false,
    tabValue: 0,
    selectedIndex: 101, // выбор пункта меню в профиле
    data: {
      operator: {},
      companyId: null,
    },
  },
  dialogs: {
    changePassword: false
  },
  nav: {
    data: getNavListData(),
    selectedNavItems: '',
  },
  banner: {},
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers,
  extraReducers,
});

const sidebarReducer = sidebarSlice.reducer;

export const {
  setSelectedNavItem,
  setProfileValues,
  resetSidebarState,
  setProfileState,
  setDialogsSidebarState,
} = sidebarSlice.actions;

export default sidebarReducer;
