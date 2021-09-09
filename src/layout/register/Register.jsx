import React, { useReducer } from 'react';
import { 
    Button, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle
} from '@material-ui/core';
import RegisterForm from './RegisterForm';
import { reducer } from '../../utils/reducerState';
import axios from 'axios';
import { PURCHASES_API_URL } from '../../utils/urls';
import useAlert from '../../hooks/useAlert';

const DEFAULT_VALUES = { code: '', value: '', date: '' };

const Register = ({ open, onClose }) => {
    const { showAlert } = useAlert();
    const [values, setValues] = useReducer(reducer, DEFAULT_VALUES);

    const handleClose = () => {
        setValues(DEFAULT_VALUES);
        onClose();
    }

    const handleChange = ({ target }) => 
        setValues({ [target.name]: target.value })

    const handleSubmit = async () => {
        try {
            await axios.post(PURCHASES_API_URL);
            showAlert({ message: 'Cadastro realizado com sucesso!', type: 'success' })
            onClose();
        }
        catch(error) {
            showAlert({ message: 'Não foi possível cadastrar a compra!', type: 'error' });
            onClose();
        }
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Cadastrar Compra"}</DialogTitle>

                <DialogContent>
                    <RegisterForm onChange={handleChange} values={values} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Cadastrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Register;
