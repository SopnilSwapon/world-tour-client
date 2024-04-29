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
    const [touristsSpots, setSpots] = useState([]);
    const [loader , setLoader] = useState(true);
    const [listedSpots, setListedSpots] = useState(null);
    //____________ Create user_______________ //
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //____________ User Login_______________ //
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //____________Google Login_______________ //
    
    const googleProviderLogin = () => {
        setLoader(true)
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //____________Google Login_______________ //
    const githubLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, gitHubProvider);
    }
    //____________ Log Out_______________ //
    const LogOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    //____________all spots loaded function___________//
    useEffect(()=>{
        fetch('https://world-tour-server-ten.vercel.app/spots/spots')
        .then(res => res.json())
        .then(data => {
            setSpots(data)
        });
    },[]);
    // ________________my listed spots________________
    useEffect(() => {
        fetch(`https://world-tour-server-ten.vercel.app/myList/${users?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('inside the auth');
                setListedSpots(data);
            })
    }, [users]);

    const authInfo = {
        users,
        createUser,
        login,
        googleProviderLogin,
        githubLogin,
        LogOut,
        loader,
        touristsSpots,
        listedSpots
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser)
            console.log(currentUser);
            setLoader(false)
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