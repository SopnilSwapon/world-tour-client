import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth";
// import { GithubAuthProvider } from "firebase/auth/cordova";
// import { GithubAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [users, setUsers] = useState(null);
    //____________ Create user_______________ //
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //____________ User Login_______________ //
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //____________Google Login_______________ //
    
    const googleProviderLogin = (provider) => {
        // setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //____________Google Login_______________ //
    const githubLogin = () => {
        return signInWithPopup(auth, gitHubProvider);
    }
    //____________ Log Out_______________ //
    const LogOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        users,
        createUser,
        login,
        googleProviderLogin,
        githubLogin,
        LogOut
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser)
            console.log(currentUser);
        })
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}