import React from 'react';
import USMContent from './components/content'
import USMTopBar from './components/topbar'
import USMSideBar from './components/sidebar'

import {
    CssBaseline,
    Box
} from '@mui/material';

const USMDefaultLayout = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
            <CssBaseline />
            <USMTopBar />
            <USMSideBar />
            <USMContent />
        </Box>
    );
}

export default USMDefaultLayout;