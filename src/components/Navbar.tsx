import PlayLogLogo from '/Playlog_logo.svg';
import Searchbar from './Searchbar';
import NotificationIcon from './Icons/NotificationIcon';
import MoonIcon from './Icons/MoonIcon';
import Button from './Button';
import { useTheme } from '../hooks/useTheme';
import UserDropdown from './UserDropdown';

export default function Navbar() {
  const { toggleTheme } = useTheme();
  return (
    <nav className="navbar">
        <img src= {PlayLogLogo} alt="Playlog Logo" className="navbar-logo" />
        <p className='company-name'>Playlog</p>

        <Searchbar />

        <div className='user-bar'>
          <Button className='navButton'>
            <NotificationIcon width={30} height={30}/>
          </Button>
            <p>user name</p>
            <UserDropdown />
            <Button className='navButton' onClick={toggleTheme}>
              <MoonIcon width={30} height={30}/>
            </Button>
        </div>
    </nav>
  );
}