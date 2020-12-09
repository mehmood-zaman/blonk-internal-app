import {
  GeneralSettings,
  GeneralStates,
  SIDEBAR_EXPAND,
  DRAWER_MENU_DISPLAY,
  generalActionTypes,
} from './types';
import { updateObject } from '../../helpers/updateObject';

const initialState: GeneralSettings = {
  sidebarExpanded: false,
  drawerMenuDisplayed: false,
};

const sidebarExpand = (state: GeneralSettings, action: generalActionTypes) => {
  return updateObject(state, { sidebarExpanded: action.value });
};

const drawerMenuDisplay = (
  state: GeneralSettings,
  action: generalActionTypes
) => {
  return updateObject(state, { drawerMenuDisplayed: action.value });
};

const generalReducers = (state = initialState, action: generalActionTypes) => {
  switch (action.type) {
    case SIDEBAR_EXPAND:
      return sidebarExpand(state, action);
    case DRAWER_MENU_DISPLAY:
      return drawerMenuDisplay(state, action);
    default:
      return state;
  }
};

export default generalReducers;
