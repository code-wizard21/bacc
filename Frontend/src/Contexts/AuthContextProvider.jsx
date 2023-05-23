import React from "react"

export const AuthContext=React.createContext()

export default function AuthContextProvider({children}){
    const [isAuth,setisAuth]=React.useState(false)
    let [page,setpage]=React.useState(null)
    const [isAdmin,setIsAdmin]=React.useState(false)
    
    const Login=()=>{
        setisAuth(true)
    }

    const Logout=()=>{
        setisAuth(false)
    }

    return <AuthContext.Provider value={{isAuth,Login,setpage,page,Logout,isAdmin,setIsAdmin}}>{children}</AuthContext.Provider>
}