import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    if (!user?.email) {
        return (<Navigate to={'/login'} state={location.pathname} />);
    }

    return (
        <div>
            {children};
        </div>
    );
};


PrivateRoute.propTypes = {
    children : PropTypes.element
}

export default PrivateRoute;