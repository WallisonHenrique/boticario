import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { USERS_API_URL } from '../utils/urls';
import { reducer } from '../utils/reducerState';
import useAlert from '../hooks/useAlert';

const DEFAULT_VALUES = {
    loading: false,
    error: false,
    signed: false,
    user: null,
    login: () => null,
    logout: () => null,
};

const AuthContext = createContext(DEFAULT_VALUES);

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useReducer(reducer, DEFAULT_VALUES);
    const { showAlert } = useAlert();

    const login = async ({ email, password }) => {
        try {
            setAuth({ loading: true });
            const { data } = await axios.post(USERS_API_URL, null, {
                params: { email, password }
            });

            setAuth({ error: false, user: { ...data } });
        } catch(error) {
            console.log('@login error', error);
            setAuth({ error: true });
            showAlert({ message: 'Senha ou email inválidos!', type: 'error' });
        } finally {
            setAuth({ login: false });
        }
    }

    const logout = () => setAuth({ user: null });

    return (
        <AuthContext.Provider 
            value={{ ...auth, login, logout, signed: Boolean(auth.user) }}
        >
            { children }
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
