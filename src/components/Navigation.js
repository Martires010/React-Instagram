import '../styles/navigation.scss';
import logo from '../img/instagramLogo.png';
import searchIcon from '../img/searchIcon.png';
import Menu from './Menu.js';

function Navigation() {
    return (
        <div className="naviagtion">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>
            </div>
        </div>
    );
}

export default Navigation;