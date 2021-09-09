import React, { useReducer } from 'react';
import { Button, TextField } from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useStyles from './SignInForm.style';
import { reducer } from '../../../utils/reducerState';
import LinkSignUp from './LinkSignUp';

const DEFAULT_VALUES = { email: 'john.doe@fake.com', password: '1234' };
const INPUTS = [ { name: 'email', autoFocus: true }, { name: 'password' } ];

const SignInForm = () => {
    const classes = useStyles();
    const { login } = useAuth();
    const [ values, setValues ] = useReducer(reducer, DEFAULT_VALUES);

    const handleChange = ({ target }) => 
        setValues({ [target.name]: target.value });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(values);
    }

    const InputsElements = ({ name, ...props }) => (
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={name}
            label={name}
            name={name}
            onChange={handleChange}
            value={values[name]}
            { ...props }
        />
    );

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            {
                INPUTS.map(InputsElements)
            }

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Entrar
            </Button>

            <LinkSignUp />
        </form>
    );
};

export default SignInForm;