import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import RegisterPage from "../Pages/Register"
import PrivateRouter from "./PrivateRouter"

export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}