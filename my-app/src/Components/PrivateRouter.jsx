import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContextProvider"

export default function PrivateRouter({children}){
    const {isAuth}=useContext(AuthContext)
    if(!isAuth) return <Navigate to="/login"/>
    return children
}