import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
    Toolbar,
    Box
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { useSelector } from 'react-redux';

import routes from '../../../routes'

const MaterialUILoadingSpinner = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress color="primary" />
        </div>
    );
};

const USMContent = () => {

    const usmTheme = useSelector((state) => state.usmTheme);

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                transition: (theme) =>
                    theme.transitions.create('margin', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                marginLeft: open ? `${usmTheme.drawerWidth}px` : `${usmTheme.closedDrawerWidth}px`,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Toolbar />
            <Suspense fallback={<MaterialUILoadingSpinner />}>
                <Routes>
                    {routes.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={<route.element />}
                                />
                            )
                        )
                    })}
                    <Route path="/" element={<Navigate to="dashboard" replace />} />
                </Routes>
            </Suspense>

        </Box>
    );
}

export default USMContent;