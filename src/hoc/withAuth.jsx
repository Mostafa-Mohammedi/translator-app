import { Navigate } from 'react-router-dom';
import {useUser} from '../context/UserContext'

/**
* withAuth is a higher order component  that checks if a user is authenticated before rendering a component.
* @param {Component} Component - The component to be rendered if the user is authenticated.
*/
const withAuth = Component => props => {
    const {user} =  useUser();

    if(user !==null){
        return <Component {...props}/>
    }
    else {
        return <Navigate to={{ pathname: '/' }} replace />;

    }
}
export default withAuth;