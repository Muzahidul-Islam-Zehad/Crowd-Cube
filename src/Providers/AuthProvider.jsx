import { createContext } from "react";
import PropTypes from "prop-types";

export const authContext = createContext();
const AuthProvider = ({children}) => {

    const contextContainer = {

    }


    return (
        <authContext.Provider value={contextContainer}>
            {children}
        </authContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element,
}

export default AuthProvider;