import React, { useState } from 'react';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Tooltip,
    Menu,
    MenuItem
} from '@mui/material';
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    AccountCircle as AccountCircleIcon,
    Notifications as NotificationsIcon
} from '@mui/icons-material';

import { useDispatch } from 'react-redux';

import { setSidebarCollapsed } from '../../../store/reducers/theme'

const USMTopBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch(setSidebarCollapsed())
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                transition: (theme) => theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                backgroundColor: '#ffffff',
                color: '#000000',
                boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="toggle drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    sx={{ marginRight: 2 }}
                >
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Minimal Dashboard
                </Typography>
                <Tooltip title="Notifications">
                    <IconButton color="inherit">
                        <NotificationsIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Account">
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-controls="account-menu"
                        aria-haspopup="true"
                        onClick={handleMenu}
                    >
                        <AccountCircleIcon />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="account-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>

    );

}

export default USMTopBar;