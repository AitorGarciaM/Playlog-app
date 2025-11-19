import PlayLogLogo from '/Playlog_logo.svg';
import Searchbar from './Searchbar';
import NotificationIcon from './Icons/NotificationIcon';
import UserIcon from './Icons/UserIcon';
import MoonIcon from './Icons/MoonIcon';

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src= {PlayLogLogo} alt="Playlog Logo" className="navbar-logo" />
        <p className='company-name'>Playlog</p>

        <Searchbar />

        <div className='user-bar'>
           <NotificationIcon width={30} height={30}/>
           <p>user name</p>
           <UserIcon width={40} height={40} className='user-icon'/>
           <MoonIcon width={30} height={30} className='user-icon'/>
        </div>
    </nav>
  );
}