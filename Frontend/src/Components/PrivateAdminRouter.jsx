import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContextProvider"

export default function PrivateAdminRouter({children}){
    // const {isAdmin}=useContext(AuthContext)
    // if(!isAdmin) return <Navigate to="/"/>
    return children
}