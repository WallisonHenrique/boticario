import { Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';

const PrivateRoute = () => {
    return (
        <>
            <Route path="/">
                <Dashboard />
            </Route>
            <Redirect to="/" />
        </>
    );
}

export default PrivateRoute;