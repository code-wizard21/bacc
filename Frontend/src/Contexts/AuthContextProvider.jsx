import React from "react"
import { useSearchParams } from "react-router-dom"

export const AuthContext=React.createContext()

export default function AuthContextProvider({children}){
    const [searchParams,setSearchParams]=useSearchParams()
    const [isAuth,setisAuth]=React.useState(false||searchParams.get('isAuth'))
    const [isAdmin,setIsAdmin]=React.useState(false)
    const [isTourist,setIsTourist]=React.useState(false)
    
    const Login=()=>{
        setisAuth(true)
    }

    const Logout=()=>{
        setisAuth(false)
    }

    return <AuthContext.Provider value={{isAuth,Login,Logout,isAdmin,setIsAdmin,isTourist,setIsTourist}}>{children}</AuthContext.Provider>
}