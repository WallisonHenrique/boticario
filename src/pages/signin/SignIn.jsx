import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import SignInForm from './form/SignInForm';
import useStyles from './SignIn.style';

const SignIn = () => {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" className={classes.title}>
                        Cashback
                    </Typography>

                    <SignInForm />
                </div>
            </Grid>
        </Grid>
    );
}

export default SignIn;