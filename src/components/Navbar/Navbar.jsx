import { HeartIcon } from '@heroicons/react/24/outline'

import "./Navbar.css"

const Navbar = ({ children }) => {
    return (
        <nav className='navbar'>
            <span className='navbar__logo'>Logo 😍</span>
            {children}
        </nav>
    );
}

export default Navbar;

export const SearchBar = ({ setQuery }) => <span className='navbar__searchbar'><input type="text" name="search" id="search" className='text-field' placeholder='search...' onInput={(e) => setQuery(e.target.value)} /></span>
export const SearchResult = ({ result }) => <span className='navbar__result'>Found <strong>{result}</strong> Results</span>
export const Favorites = ({ favoritesLength }) => <span className='navbar__favorite'><HeartIcon className='icon' /><span className='badge'>{favoritesLength}</span></span>
