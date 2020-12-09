import {
  SIDEBAR_EXPAND,
  DRAWER_MENU_DISPLAY,
  generalActionTypes,
} from './types';

export const setSidbarExpand = (value: boolean): generalActionTypes => {
  return {
    type: SIDEBAR_EXPAND,
    value,
  };
};

export const setDrawerMenuDisplay = (value: boolean): generalActionTypes => {
  return {
    type: DRAWER_MENU_DISPLAY,
    value,
  };
};
