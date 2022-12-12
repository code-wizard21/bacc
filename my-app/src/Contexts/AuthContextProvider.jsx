import React from "react"

export const AuthContext=React.createContext()

export default function AuthContextProvider({children}){
    const [isAuth,setisAuth]=React.useState(false)
    return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>
}