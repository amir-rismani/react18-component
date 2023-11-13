import { useState } from 'react';

import Character from './Character/Character';

import "./Characters.css"
const Characters = ({ allCharacters, setCharacter }) => {
    const [characters, setCharacters] = useState(allCharacters)
    return (
        <div className="characters">
            <div className="characters__list">
                {characters.map(character => <Character character={character} key={character.id} setCharacter={setCharacter}/>)}
            </div>
        </div>
    );
}

export default Characters;