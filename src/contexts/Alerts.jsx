import { Snackbar } from '@material-ui/core';
import React, { createContext, useReducer } from 'react';
import { reducer } from '../utils/reducerState';
import MuiAlert from '@material-ui/lab/Alert';

const DEFAULT_VALUES = { open: false, message: '', type: 'success' }

const AlertContext = createContext({ showAlert: () => null });

const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useReducer(reducer, DEFAULT_VALUES);

    const showAlert = ({ message, type }) => 
        setAlert({ open: true, message, type });
    
    const handleClose = () => setAlert({ open: false });

    return (
        <AlertContext.Provider 
            value={{ showAlert }}
        >
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center', }}    
            >
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={alert.type}>
                    { alert.message }
                </MuiAlert>
            </Snackbar>
            { children }
        </AlertContext.Provider>
    );
}

export { AlertProvider, AlertContext };
