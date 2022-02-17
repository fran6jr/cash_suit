import React, { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {

  const auth = useAuth(); //initialise the auth state

  return <AuthContext.Provider value ={auth} >
    { children }
  </AuthContext.Provider>
}

const AuthConsumer = () => {// use this to access the state from the child component
  return useContext(authContext);
}

const useAuth = () => {


  return {
    user,// I want user to contain the user data
    login,
    logout,
    signup
  }
}

export default AuthConsumer;
export default AuthProvider;