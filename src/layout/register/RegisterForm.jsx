import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';
import { reducer } from '../../utils/reducerState';

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    }
}));

const INPUTS = [ 
    { label: 'Código', name: 'code', autoFocus: true },
    { label: 'Valor', name: 'value' },
    { label: 'Data', name: 'date', type: 'date' },
];

const RegisterForm = ({ onChange, values }) => {
    const classes = useStyles();

    const InputsElement = ({ name, ...props }) => (
        <Grid item xs={12} sm={4}>
            <TextField
                name={name}
                variant="outlined"
                required
                fullWidth
                id={name}
                value={values[name]}
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                }}
                { ...props }
            />
        </Grid> 
    )

    return (
        <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                { INPUTS.map(InputsElement) }
            </Grid>
        </form>
    );
}

export default RegisterForm;
