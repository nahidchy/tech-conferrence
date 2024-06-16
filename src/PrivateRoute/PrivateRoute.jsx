import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
       return <span className="loading loading-ball loading-lg max-w-3xl min-h-screen mx-auto text-white"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to ='/login'></Navigate>
};

export default PrivateRoute;