import { Navigate, useNavigate } from 'react-router-dom';
import {useUser} from '../context/UserContext'
const withAuth = Component => props => {
    const {user} =  useUser();
    const navigate = useNavigate();

    if(user !==null){
        return <Component {...props}/>
    }
    else {
        return <Navigate to={{ pathname: '/' }} replace />;

    }
}
export default withAuth;