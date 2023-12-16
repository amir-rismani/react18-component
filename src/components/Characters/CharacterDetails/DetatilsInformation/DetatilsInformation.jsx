import "./DetatilsInformation.css"

const DetatilsInformation = ({ character, onSetFavorites, isAddedFavorite }) => {
    return (
        <div className="details">
            <img src={character.image} />
            <div className='meta'>
                <div>
                    <h3>
                        <span className='gender'>{character.gender === 'Male' ? '👨' : '👩'}</span>
                        <span>{character.name}</span>
                    </h3>
                    <div>
                        <span className={`status ${character.status === 'Alive' ? '' : 'red'}`}></span>
                        <span>{character.status} - {character.species}</span>
                    </div>
                    <div className='meta__location'>
                        <span className='mute'>Last known location:</span>
                        <strong>{character.location?.name}</strong>
                    </div>
                    {
                        !isAddedFavorite ?
                            <button className='button' onClick={() => onSetFavorites(character)}>Add to Favorite</button> :
                            <p>Already added to favorites ✅</p>
                    }

                </div>
            </div>
        </div>
    );
}

export default DetatilsInformation;