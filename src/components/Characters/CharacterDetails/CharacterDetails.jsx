import "./CharacterDetails.css"
import Episodes from './Episodes/Episodes';
import Episode from './Episodes/Episode/Episode';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../../Loader/Loader";

const CharacterDetails = ({ characterId, onSetFavorites, isAddedFavorite }) => {
    const [character, setCharacter] = useState(null)
    const [episodes, setEpisodes] = useState([])
    const [isLoader, setIsLoader] = useState(false)
    useEffect(() => {
        setCharacter(null)
        const fetchData = async () => {
            try {
                setIsLoader(true)
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                setCharacter(data)
                const episodeIds = data.episode.map(item => item.split('/').at(-1));
                const { data: episodeList } = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds}`)
                setEpisodes(episodeList.slice(0, 10))
            } catch (error) {
                toast.error(error.response.data.error)
            } finally {
                setIsLoader(false)
            }
        }
        if (characterId) fetchData()

    }, [characterId])

    if (isLoader) return <Loader />
    if (!character) return <p className="characters__details text-center">Character is not selected.</p>
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
            <Episodes>
                {episodes.map((episode) => <Episode episode={episode} key={episode.id} />)}
            </Episodes>
        </div>
    );
}

export default CharacterDetails;


const Details = () => {

}