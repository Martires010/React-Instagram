import '../styles/menu.scss';
import { ReactComponent as Home } from '../img/home.svg';
import { ReactComponent as Inbox } from '../img/inbox.svg';
import { ReactComponent as Explore } from '../img/explore.svg';
import { ReactComponent as Notifications } from '../img/notification.svg';
import image from '../img/ProfileIcon.png';
import ProfileIcon from './ProfileIcon';


function Menu () {
    return ( 
    <div className="menu">
        <Home className="icon" />
        <Inbox className="icon" />
        <Explore className="icon" />
        <Notifications className="icon" />
        <ProfileIcon iconSize="small" image={image} />
    </div>
    );
}

export default Menu;