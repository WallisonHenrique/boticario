import React from 'react';
import { useHistory } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, TextField, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useAlert from '../../hooks/useAlert';
import axios from 'axios';
import { NEW_USER_API_URL } from '../../utils/urls';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const { showAlert } = useAlert();
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await axios.post(NEW_USER_API_URL);
      showAlert({ message: 'Usuário cadastrado com sucesso', type: 'success' });
    }
    catch (error) {
      showAlert({ message: 'Não foi possível cadastrar o usuário', type: 'error' });
    }
    finally {
      history.push('/signin');
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Cadastre-se
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cpf"
                label="CPF"
                name="cpf"
                autoComplete="cpf"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2">
                Já tem uma conta? Entrar
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;