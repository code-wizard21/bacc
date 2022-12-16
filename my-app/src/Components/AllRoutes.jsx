import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from '../Pages/Login'
import PrivateRouter from "./PrivateRouter"
import ProductsPage from "../Pages/ProductsPage"
import SingleProduct from "../Pages/SingleProduct"

export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        </Routes>
    )
}