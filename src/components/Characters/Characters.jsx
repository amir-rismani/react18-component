
import Character from './Character/Character';
import { characters } from '../../data/characters';

import img from '../../assets/react.svg'
import "./Characters.css"
import CharacterDetails from './CharacterDetails/CharacterDetails';
const Characters = () => {
    return (
        <div className="characters">
            <div className="characters__list">
                {characters.map(character => <Character character={character} key={character.id} />)}
            </div>
            <CharacterDetails character={characters[0]} />
        </div>
    );
}

export default Characters;