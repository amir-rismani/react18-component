import { EyeIcon } from '@heroicons/react/24/outline'

import "./Character.css"
const Character = ({ character, setCharacter }) => {
    return (
        <div className="character-item">
            <div className='meta'>
                <img src={character.image} />
                <div>
                    <h3>
                        <span className='gender'>{character.gender === 'Male' ? '👨' : '👩'}</span>
                        <span>{character.name}</span>
                    </h3>
                    <div>
                        <span className={`status ${character.status === 'Alive' ? '' : 'red'}`}></span>
                        <span>{character.status} - {character.species}</span>
                    </div>
                </div>
            </div>
            <span className='show-details' onClick={() => setCharacter(character)}><EyeIcon className='icon' /></span>
        </div>);
}

export default Character;