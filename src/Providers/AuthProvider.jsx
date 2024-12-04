import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/__firebase.init";

export const authContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [campaign, setCampaign] = useState([]);
    const [myCamp, setMyCamp] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser([]);
            }

            setLoading(false);
          });
    },[])

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);
    }

    const registerWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser,updatedData);
    }

    const logoutuser = () =>{
        return signOut(auth);
    }
    console.log(user , loading);

    const contextContainer = {
        user,
        setUser,
        loading,
        setLoading,
        googleLogin,
        registerWithEmailAndPassword,
        logoutuser,
        loginWithEmailAndPassword,
        updateUserProfile,
        campaign,
        setCampaign,
        myCamp,
        setMyCamp,
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