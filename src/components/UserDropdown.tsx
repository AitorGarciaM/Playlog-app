import Button from './Button';
import BookIcon from './Icons/BookIcon';
import GenericAvatarIcon from './Icons/GenericAvatarIcon';
import UserIcon from './Icons/UserIcon';

import { useState } from 'react';
import UsersIcon from './Icons/UsersIcon';
import LogOutIcon from './Icons/LogOut';

export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="user-dropdown">
            <Button className='navButton' onClick={toggleDropdown}>
                <GenericAvatarIcon width={30} height={30}/>
            </Button>
            
            <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                <ul>
                    <li><UserIcon width={20} height={20} />Perfil</li>
                    <li><BookIcon width={20} height={20} /> Mi librería</li>
                    <li><UsersIcon width={20} height={20} />Amigos</li>
                    <hr className='dropdown-separator' />
                    <li><LogOutIcon width={20} height={20} />Cerrar Sesión</li>
                </ul>
            </div>       
        </div>
    );
}