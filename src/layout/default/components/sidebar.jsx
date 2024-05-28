import React from 'react';
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

import { useSelector } from 'react-redux';


const USMSideBar = () => {

    const usmTheme = useSelector((state) => state.usmTheme);

    return (
        <Drawer
        variant="permanent"
        sx={{
          width: !usmTheme.sidebarCollapsed ? usmTheme.drawerWidth : usmTheme.closedDrawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: !usmTheme.sidebarCollapsed ? usmTheme.drawerWidth : usmTheme.closedDrawerWidth,
            transition: (theme) =>
              theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
            overflowX: 'hidden',
            boxShadow: '0px 2px 10px -1px rgb(0 0 0 / 20%)',
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {!usmTheme.sidebarCollapsed && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {!usmTheme.sidebarCollapsed && <ListItemText primary="About" />}
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {!usmTheme.sidebarCollapsed && <ListItemText primary="Settings" />}
          </ListItem>
        </List>
      </Drawer>
    );
}

export default USMSideBar;