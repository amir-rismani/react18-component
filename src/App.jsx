import './App.css'
import Navbar, { Favorites, SearchBar, SearchResult } from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import Character from './components/Characters/Character/Character';
import CharacterDetails from './components/Characters/CharacterDetails/CharacterDetails'
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Loader from './components/Loader/Loader';
function App() {
  const [characters, setCharacters] = useState([])
  const [favorites, setFavorites] = useState([])
  const [query, setQuery] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCharacterId, setSelectedCharacterId] = useState(null)

  const handleSelectedCharacter = (id) => {
    setSelectedCharacterId(prevId => prevId === id ? null : id)
  }

  const handleSetFavorites = (character) => {
    setFavorites((prevFav) => [...prevFav, character])
  }

  const isAddedFavorite = favorites.map(favorite => favorite.id).includes(selectedCharacterId);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // async/await fetch and axios
    async function fetchData() {
      //   try {
      //     setIsLoading(true)
      //     const res = await fetch('https://rickandmortyapi.com/api/character')
      //     if (!res.ok) throw new Error('Something wrong!')
      //     const data = await res.json();
      //     setCharacters(data.results.slice(0, 5))
      //   } catch (error) {
      //     toast.error(error.message)
      //   } finally {
      //     setIsLoading(false)
      //   }

      try {
        setIsLoading(true)
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`, { signal }
        )
        setCharacters(data.results.slice(0, 5))
      } catch (error) {
        console.log(error)
        if (!axios.isCancel(error)) {
          setCharacters([])
          toast.error(error.response.data.error)
        }
      } finally {
        setIsLoading(false)
      }

      return () => { controller.abort() };

    }

    fetchData()

    // axios.get('https://rickandmortyapi.com/api/character')
    //   .then(({ data }) => {
    //     setIsLoading(true)
    //     setCharacters(data.results.slice(0, 5))
    //   })
    //   .catch(err => toast.error(err.response.data.error))
    //   .finally(() => setIsLoading(false))

    // fetch('https://rickandmortyapi.com/api/character')
    //   .then(res => {
    //     setIsLoading(true)
    //     // console.log(res)
    //     if (!res.ok) throw new Error('Something wrong!')
    //     return res.json()
    //   })
    //   .then(data => {
    //     setCharacters(data.results.slice(0, 5))
    //   })
    //   .catch(err => {
    //     // setIsLoading(false)
    //     toast.error(err.message)
    //   })
    //   .finally(() => {
    //     setIsLoading(false)
    //   })
  }, [query])

  return (
    <>
      <Toaster />
      <Navbar>
        <SearchBar setQuery={setQuery} />
        <SearchResult result={characters.length} />
        <Favorites favoritesLength={favorites.length} />
      </Navbar>
      <main>
        {
          isLoading ?
            <Loader /> :
            <Characters>
              {characters.map(character => <Character character={character} onSelectedCharacter={handleSelectedCharacter} selectedCharacterId={selectedCharacterId} key={character.id} />)}
            </Characters>
        }
        <CharacterDetails characterId={selectedCharacterId} onSetFavorites={handleSetFavorites} isAddedFavorite={isAddedFavorite} />
      </main>

    </>
  )
}

export default App
