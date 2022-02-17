import React, { createContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />
}

export default PrivateRoute;

// const MyContext = createContext();

// <MyContext.Provider value={}></MyContext.Provider>
// <MyContext.Consumer>
//   {value => 
//   }
// </MyContext.Consumer>