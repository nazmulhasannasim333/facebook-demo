import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (name, photo) => {
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const logout = () => {
        setLoading(true)
       return signOut(auth);
    }

    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
       return signInWithPopup(auth, githubProvider)
    }
    const facebookLogin = () => {
       return signInWithPopup(auth, facebookProvider)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        profileUpdate,
        logout,
        googleLogin,
        githubLogin,
        facebookLogin
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;