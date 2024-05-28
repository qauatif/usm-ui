import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getValue } from '../utils/storage';
import APP_CONSTANTS from '../constants/app-constant';

const PrivateRoute = () => {
 
  const isLoggedIn = getValue(APP_CONSTANTS.IS_LOGGED_IN);

  return isLoggedIn ? <Outlet /> : <Navigate to={APP_CONSTANTS.ROUTES.LOGIN} />;
};

export default PrivateRoute;
