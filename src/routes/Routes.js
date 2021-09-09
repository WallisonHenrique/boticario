import { BrowserRouter as Router, Switch } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PrivateRoute from './Private';
import SignInRoute from './SignIn';

const Routes = () => {
    const { signed } = useAuth();

    return (
        <Router basename="/">
            <Switch>
                { signed ? <PrivateRoute /> : <SignInRoute /> }
            </Switch>
        </Router>
    )
}

export default Routes;