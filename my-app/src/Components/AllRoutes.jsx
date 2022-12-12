import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import RegisterPage from "../Pages/Register"
import PrivateRouter from "./PrivateRouter"

export default function Allroutes(){
    return(
        <Routes>
            <Route to="/" element={<HomePage/>}/>
            <Route to="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}