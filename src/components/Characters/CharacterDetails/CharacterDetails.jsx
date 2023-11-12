import "./CharacterDetails.css"
import Episodes from './Episodes/Episodes';

const CharacterDetails = ({ character }) => {
    return (
        <div className="characters__details">
            <div className="details">
                <img src={character.image} />
                <div className='meta'>
                    <div>
                        <div>
                            <span className='gendar'>{character.gender === 'Male' ? '👨' : '👩'}</span><span>{character.name}</span>
                        </div>
                        <div>
                            <span>{character.status === 'Alive' ? '🟢' : '🔴'}</span>{character.status} - <span>{character.species}</span>
                        </div>
                        <div className='meta__location'>
                            <span className='mute'>Last known location:</span>
                            <strong>{character.location.name}</strong>
                        </div>
                        <button className='button'>Add to Favorite</button>
                    </div>
                </div>
            </div>
            <Episodes episodes={character.episode} />
        </div>
    );
}

export default CharacterDetails;