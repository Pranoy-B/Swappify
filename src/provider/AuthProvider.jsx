import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider()

const GoogleLogin = () => {
  return signInWithPopup(auth,GoogleProvider)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
 
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }

  const logOut = () => {
        return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        unsubscribe()
    }
  },[])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    loading,
    setLoading,
    updateUser,
    GoogleLogin,

  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
