import React from "react"

export const AuthContext=React.createContext()

export default function AuthContextProvider({children}){
    const [isAuth,setisAuth]=React.useState(false)

    let page=null;

    const Login=()=>{
        setisAuth(true)
    }

    const Logout=()=>{
        setisAuth(false)
    }

    return <AuthContext.Provider value={{isAuth,Login,page}}>{children}</AuthContext.Provider>
}