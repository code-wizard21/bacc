import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from '../Pages/Login'
import PrivateRouter from "./PrivateRouter"
import ProductsPage from "../Pages/ProductsPage"
import SingleProduct from "../Pages/SingleProduct"
import PaymentsPage from "../Pages/PaymentsPage"
import CheckoutPage from "../Pages/CheckoutPage"
import LoaderPage from "../Pages/LoaderPage"
import SuccessPayment from "../Pages/SuccessPayment"
import { Error404 } from "./Error404"
import { CreateProduct } from "../Pages/Admin/CreateProduct"
import { UserData } from "../Pages/Admin/UserData"
import { ProductsData } from "../Pages/Admin/ProductsData"
import { Admin } from "../Pages/Admin/Admin"
import PrivateAdminRouter from "./PrivateAdminRouter"

export default function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
            <Route path='/checkout' element={<PrivateRouter><CheckoutPage/></PrivateRouter>}/>
            <Route path='/payment' element={<PrivateRouter><PaymentsPage/></PrivateRouter>}/>
            <Route path='/admin' element={<PrivateAdminRouter><Admin/></PrivateAdminRouter>}/>
            <Route path='/admin/productDashboard' element={<PrivateAdminRouter><ProductsData/></PrivateAdminRouter>}/>
            <Route path='/admin/userDashboard' element={<PrivateAdminRouter><UserData/></PrivateAdminRouter>}/>
            <Route path='/admin/createProduct' element={<PrivateAdminRouter><CreateProduct/></PrivateAdminRouter>}/>
            <Route path='/loader' element={<PrivateRouter><LoaderPage/></PrivateRouter>}/>
            <Route path='/paymentdone' element={<PrivateRouter><SuccessPayment/></PrivateRouter>}/>
            <Route path='/*' element={<Error404/>}/>
        </Routes>
    )
}