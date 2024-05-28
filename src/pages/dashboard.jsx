import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Paper
} from '@mui/material';

const Dashboard = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Dashboard
                </Typography>
                <Typography>
                  Welcome to the modern web application. This is the main dashboard content.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Section 1
                </Typography>
                <Typography>
                  This is some content for section 1. It can include any relevant information or functionality.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Section 2
                </Typography>
                <Typography>
                  This is some content for section 2. It can include any relevant information or functionality.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
    );
}

export default Dashboard;