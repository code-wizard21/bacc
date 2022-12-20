import {Routes,Route} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Signup from "../Pages/Signup"
import Login from '../Pages/Login'
import PrivateRouter from "./PrivateRouter"
import ProductsPage from "../Pages/ProductsPage"
import SingleProduct from "../Pages/SingleProduct"
import PaymentsPage from "../Pages/PaymentsPage"
import CheckoutPage from "../Pages/CheckoutPage"
import AdminPage from "../Pages/AdminPage"
import PropertyListing from "../Pages/PropertyListing"
import LoaderPage from "../Pages/LoaderPage"
import SuccessPayment from "../Pages/SuccessPayment"

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
            <Route path='/admin' element={<AdminPage/>}/>
            {/* <Route path='/propertylist' element={<PropertyListing/>}/> */}
            <Route path='/loader' element={<PrivateRouter><LoaderPage/></PrivateRouter>}/>
            <Route path='/paymentdone' element={<PrivateRouter><SuccessPayment/></PrivateRouter>}/>
        </Routes>
    )
}