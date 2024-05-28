import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme';
import authReducer from './reducers/auth';

const store = configureStore({
  reducer: {
    usmTheme: themeReducer,
    auth: authReducer
  },
});

export default store;
