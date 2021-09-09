import React, { useState } from 'react';
import clsx from 'clsx';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useAuth from '../hooks/useAuth';
import useStyles from './Header.style';
import Register from './register/Register';

const Header = () => {
  const classes = useStyles();
  const { logout } = useAuth();
  const [openModal, setOpenModal] = useState(false);

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, true && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Cashback
            </Typography>

            <div>
                <Typography component="body2" variant="body2" color="inherit" noWrap className={classes.title}>
                    Cadastrar compra
                </Typography>

                <IconButton color="inherit" onClick={() => setOpenModal(true)}>
                    <AddIcon />
                </IconButton>

                <Register open={openModal} onClose={() => setOpenModal(false)} />
            </div>

            <IconButton color="inherit" onClick={logout}>
                <ExitToAppIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  );
}

export default Header;