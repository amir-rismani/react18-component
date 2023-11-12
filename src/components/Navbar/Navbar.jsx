import { HeartIcon } from '@heroicons/react/24/outline'

import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <span className='navbar__logo'>Logo 😍</span>
            <span className='navbar__searchbar'><input type="text" name="search" id="search" className='text-field' placeholder='search...' /></span>
            <span className='navbar__result'>Found <strong>X</strong> Results</span>
            <span className='navbar__favorite'><HeartIcon className='icon' /><span className='badge'>3</span></span>
        </nav>
    );
}

export default Navbar;