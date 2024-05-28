import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import USMDefaultLayout from './layout/default/default';
import CircularProgress from '@mui/material/CircularProgress';

// import components
import PrivateRoute from './components/private-route';

// import pages
import Login from './pages/login';

import APP_CONSTANTS from './constants/app-constant';

const MaterialUILoadingSpinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress color="primary" />
    </div>
  );
};

const App = () => {


  return (

    <HashRouter>
      <Suspense fallback={<MaterialUILoadingSpinner />}>
        <Routes>
          <Route exact path={APP_CONSTANTS.ROUTES.LOGIN} name="Login Page" element={<Login />} />
          <Route path="*" element={<PrivateRoute />}>
            <Route path="*" element={<USMDefaultLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>


  )
}

export default App
