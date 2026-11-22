import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import UserRegistration from './UserRegistration/UserRegistration';
import Login from './Login/Login';
import ProductList from './PLP/ProductList';


const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element = {<Home></Home>} ></Route>
        <Route path='/register' element={<UserRegistration></UserRegistration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='products' element={<ProductList></ProductList>}></Route>

    </Routes>
)}

export default AppRoutes;