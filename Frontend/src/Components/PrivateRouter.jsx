import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContextProvider"

export default function PrivateRouter({children}){
    const location=useLocation()
    const {isAuth}=useContext(AuthContext)

    if(!isAuth) return <Navigate to="/login" state={location.pathname} replace/>
    return children
}