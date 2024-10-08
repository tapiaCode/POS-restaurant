import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children }) =>{
  const [auth, setAuth ] = useState();
  const [hasAccount, setHasAccount] =useState(true)

  const loging = (useData) =>{
    setAuth(useData)
  }
  const logOut = () =>{
    setAuth(undefined)
  }
 

  const valueContext = {
    auth,
    loging,
    logOut,
    hasAccount, setHasAccount
  };
  return(
    <AuthContext.Provider value={valueContext }>
      {children}
    </AuthContext.Provider>
  )
} 