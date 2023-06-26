import {initialState} from "./sidebarSlice"


const reducers = {

  setProfileState(state, action) {
    state.profile = {...state.profile, ...action.payload};
  },

  setDialogsSidebarState(state, action) {
    state.dialogs = {...state.dialogs, ...action.payload};
  },

  setSelectedNavItem(state, action) {
    state.nav.selectedNavItems = action.payload;
  },

  setProfileValues(state, action = {}) {
    state.profile[action.payload.key] = action.payload.value
  },

  resetSidebarState(state, action = {}) {
    switch (action.payload) {
      case "profile":
        state.profile = initialState.profile;
        break;

      default:
        return initialState;
    }
  },
};

export default reducers;