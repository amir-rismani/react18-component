import "./Character.css"
const Character = ({ character, children }) => {

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
            {children}
        </div>);
}

export default Character;