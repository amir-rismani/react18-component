import "./CharacterDetails.css"
import Episodes from './Episodes/Episodes';
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../../Loader/Loader";
import DetatilsInformation from "./DetatilsInformation/DetatilsInformation";

const CharacterDetails = ({ characterId, onSetFavorites, isAddedFavorite }) => {
    const [character, setCharacter] = useState(null)
    const [episodes, setEpisodes] = useState([])
    const [isLoader, setIsLoader] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setCharacter(null)
        const fetchData = async () => {
            try {
                setIsLoader(true)
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`, { signal })
                setCharacter(data)
                const episodeIds = data.episode.map(item => item.split('/').at(-1));
                const { data: episodeList } = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds}`, { signal })
                setEpisodes(episodeList.slice(0, 10))
            } catch (error) {
                if (!axios.isCancel(error)) toast.error(error.response.data.error)
            } finally {
                setIsLoader(false)
            }
        }
        if (characterId) fetchData()
        return () => controller.abort();
    }, [characterId])

    if (isLoader) return <Loader />
    if (!character) return <p className="characters__details text-center">Character is not selected.</p>
    return (
        <div className="characters__details">
            <DetatilsInformation character={character} isAddedFavorite={isAddedFavorite} onSetFavorites={onSetFavorites} />
            <Episodes episodes={episodes} />
        </div>
    );
}

export default CharacterDetails;
