import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../../components/title/Title';
import { formatted } from '../../../utils/currency';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Accumalated = ({ amount }) => {
  const classes = useStyles();

  return (
    <>
      <Title>Acumulado</Title>
      <Typography component="p" variant="h4">
        { formatted.format(amount) }
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
          em { new Date().toLocaleDateString() }
      </Typography>
    </>
  );
}

export default Accumalated;