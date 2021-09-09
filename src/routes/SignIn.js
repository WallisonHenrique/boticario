import { Route, Redirect } from 'react-router-dom';
import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';

const SignInRoute = () => {
    return (
        <>
            <Route path="/signin">
                <SignIn />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Redirect to="/signin" />
        </>
    );
}

export default SignInRoute;