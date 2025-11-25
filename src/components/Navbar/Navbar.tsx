import styles from './Navbar.module.scss';

import PlayLogLogo from '/Playlog_logo.svg';
import Searchbar from '../SearchBar/Searchbar';
import NotificationIcon from '../Icons/NotificationIcon';
import MoonIcon from '../Icons/MoonIcon';
import Button from '../Button';
import { useTheme } from '../../hooks/useTheme';
import UserDropdown from '../UserDropdown/UserDropdown';

export default function Navbar() {
  const { toggleTheme } = useTheme();
  return (
    <nav className="navbar">
        <img src= {PlayLogLogo} alt="Playlog Logo" className={styles['navbar-logo']} />
        <p className={styles['company-name']}>Playlog</p>

        <Searchbar />

        <div className={styles['user-bar']}>
          <Button className={styles['navButton']}>
            <NotificationIcon width={30} height={30}/>
          </Button>
            <p>user name</p>
            <UserDropdown />
            <Button className={styles['navButton']} onClick={toggleTheme}>
              <MoonIcon width={30} height={30}/>
            </Button>
        </div>
    </nav>
  );
}