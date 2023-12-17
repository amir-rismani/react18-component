import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline'

import "./Navbar.css"
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Character from '../Characters/Character/Character';

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
export const Favorites = ({ favorites, onRemoveFavorite }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Modal title="Favorites items" open={isOpen} onOpen={setIsOpen}>
                {
                    favorites.length ?
                        favorites.map(favorite => <Character character={favorite} key={favorite.id}>
                            <span className='icon red' onClick={() => onRemoveFavorite(favorite.id)}><TrashIcon /></span>
                        </Character>) :
                        <p>Nothing found...</p>

                }

            </Modal>
            <span className='navbar__favorite' onClick={() => setIsOpen(true)}><HeartIcon className='icon' /><span className='badge'>{favorites.length}</span></span>
        </>
    )
}
