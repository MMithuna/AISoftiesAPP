import './App.css';
import Footer from './Footer/footer';
import Header from './Header/header';
import UserRegistration from './UserRegistration/UserRegistration';
import Home from './Home/Home'
import Login from './Login/Login';

const App = () => {
  return (
    <div className="content">
      <Header></Header>

      {/* <UserRegistration></UserRegistration> */}
      {/* <Home></Home> */}

      <Login></Login>

      <Footer></Footer>
    </div>
  );
};

export default App;
