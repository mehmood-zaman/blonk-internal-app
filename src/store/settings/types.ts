export interface GeneralSettings {
  sidebarExpanded: boolean;
  drawerMenuDisplayed: boolean;
}

export interface GeneralStates {
  settings: GeneralSettings;
}

// Describing the different ACTION NAMES available
export const SIDEBAR_EXPAND = 'SIDEBAR_EXPAND';
export const DRAWER_MENU_DISPLAY = 'DRAWER_MENU_DISPLAY';

interface SidebarExpand {
  type: typeof SIDEBAR_EXPAND;
  value: boolean;
}

interface DrawerMenuDisplay {
  type: typeof DRAWER_MENU_DISPLAY;
  value: boolean;
}

export type generalActionTypes = SidebarExpand | DrawerMenuDisplay;
