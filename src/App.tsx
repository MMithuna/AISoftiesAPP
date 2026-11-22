import './App.css';
import Footer from './Footer/footer';
import Header from './Header/header';
import UserRegistration from './UserRegistration/UserRegistration';
import Home from './Home/Home'
import Login from './Login/Login';
import ProductList from './PLP/ProductList';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div className="content">
      <Header></Header>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
        {/* <UserRegistration></UserRegistration> */}
        {/* <Home></Home> */}

        {/* <Login></Login> */}

        {/* <ProductList></ProductList> */}
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
};

export default App;
