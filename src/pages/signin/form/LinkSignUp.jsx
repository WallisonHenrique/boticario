import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SIGNUP_URL } from '../../../utils/urls';

const LinkSignUp = () => {
    return (
        <Grid container>
            <Grid item xs />
            <Grid item>
                <Link to={SIGNUP_URL} variant="body2">
                    {"Não tem uma conta? Cadastre-se"}
                </Link>
            </Grid>
        </Grid>
    );
}

export default LinkSignUp;