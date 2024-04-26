import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../public/firebase/firebase.config";



export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [users, setUsers] = useState(null);
//____________ Create user_______________ //
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //____________ User Login_______________ //
   const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }
   //____________ Log Out_______________ //
   const LogOut = () => {
    return signOut(auth)
   }


    const authInfo = {
            users,
            createUser,
            login,
            LogOut
    };
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=> {
            setUsers(currentUser)
            console.log(currentUser);
        })
    },[])
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