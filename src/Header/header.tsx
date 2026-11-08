import './header.css';
import UserLoggedInfo from '../UserLoggedInfo/UserLoggedInfo'

const Header = () => {
    return(
        <div className="header">
            <div>
                <h1> AI Softies </h1>
                <p> <i> Softwares at your fingertip </i> </p>
            </div>
            <UserLoggedInfo></UserLoggedInfo>
        </div>
    )
}

export default Header;