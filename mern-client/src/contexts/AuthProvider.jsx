

import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const loginwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    } 

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        
        return () => {
            return unsubscribe();

        }
    },[])

  const authInfo = { 
        user,        
        createUser,
        loginwithGoogle,
        loading,
        login,
        logOut,
     };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;  // Default export
export { AuthContext };  // Named export



// import React, {createContext, useState } from 'react'
// import app from '../firebase/firebase.config';
// import {  getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// const AuthContext = createContext();
// const auth = getAuth(app);   
 
// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true); 

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     // const signUpWithGmail = () => {
        
//     // }
     

//     const authInfo ={
//         createUser
//     }
//   return (
//    <AuthContext.Provider value={authInfo}> 
//         {children}
//    </AuthContext.Provider>
//   )
// }
// // const AuthContext = createContext();
// // const auth = getAuth(app)   

// export default AuthProvider


// src/contexts/AuthProvider.jsx
