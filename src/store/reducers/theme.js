import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    drawerWidth: 240,
    closedDrawerWidth: 60,
    sidebarCollapsed: false
};

const themeSlice = createSlice({
    name: 'usmTheme',
    initialState,
    reducers: {
      setSidebarCollapsed: (state) => {
        state.sidebarCollapsed = !state.sidebarCollapsed
      }
    },
  });
  
  export const { setSidebarCollapsed } = themeSlice.actions;
  export default themeSlice.reducer;