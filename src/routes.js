import React from 'react';
const Dashboard = React.lazy(() => import('./pages/dashboard'))
const Profile = React.lazy(() => import('./pages/profile'))

import APP_CONSTANTS from './constants/app-constant';

const routes = [
    { path: APP_CONSTANTS.ROUTES.BASE, exact: true, name: 'Home' },
    { path: APP_CONSTANTS.ROUTES.DASHBOARD, name: 'Dashboard', element: Dashboard },
    { path: APP_CONSTANTS.ROUTES.PROFILE, name: 'Profile', element: Profile }
  ]
  
  export default routes