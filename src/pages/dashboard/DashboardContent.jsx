import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Purchases from './purchases/Purchases';
import Accumalated from './accumulated/Accumulated';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { PURCHASES_API_URL } from '../../utils/urls';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 140,
  },
  accumulated: {
    textAlign: 'center'
  }
}));

const DashboardContent = () => {
  const classes = useStyles();
  const { user } = useAuth();

  const [purchases, setPurchases] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.accumulated);

  useEffect(() => {
    const loadPurchases = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${PURCHASES_API_URL}/userId=${user?.id}`);
  
        setIsError(false);
        setPurchases(data);
      } 
      catch (error) {
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    }

    loadPurchases();
  }, [user]);
  
  if (isError) return <p>Ocorreu um erro!</p>;

  if (isLoading) return <p>Carregando...</p>;

  return (
    <>
      <Grid item xs={12} md={9} lg={10}>
        <Paper className={classes.paper}>
          <Purchases list={purchases?.results} />
        </Paper>
      </Grid>
            
      <Grid item xs={12} md={3} lg={2}>
        <Paper className={fixedHeightPaper}>
          <Accumalated amount={purchases?.amountCashback} />
        </Paper>
      </Grid>
    </>
  );
}

export default DashboardContent;