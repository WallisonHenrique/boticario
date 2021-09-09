import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../layout/Header';
import DashboardContent from './DashboardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: {
    marginTop: 50
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <DashboardContent />
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;