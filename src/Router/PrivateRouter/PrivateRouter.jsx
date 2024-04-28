import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6


const PrivateRouter = ({children}) => {
    const { users, loader } = useContext(AuthContext);
    const location = useLocation();

    if(loader) {
        return <span className="loading loading-infinity loading-lg"></span>

    }
    if(users){
        return children ;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRouter;
PrivateRouter.propTypes = {
    children: PropTypes.node
}