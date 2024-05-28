import React from 'react';
import { Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, Divider, Box, Paper, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {
  // Hardcoded user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    roles: ['Admin', 'Manager'],
    supervisor: 'Jane Smith',
    jobTitle: 'Software Engineer',
    location: 'New York, USA',
    // Add other user information here
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Avatar src={user.profilePicture} alt={user.name} sx={{ width: 100, height: 100 }} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}>
            <Typography variant="h4" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.email}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          User Details
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360 }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Roles" secondary={user.roles.join(', ')} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SupervisorAccountIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Reports To" secondary={user.supervisor} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Job Title" secondary={user.jobTitle} />
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary={user.location} />
          </ListItem>

          {/* Add more ListItems for other user information */}
        </List>
      </Paper>
    </Box>
  );
};

export default Profile;
