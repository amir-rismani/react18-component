import './App.css'
import Navbar from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import Character from './components/Characters/Character/Character';
import CharacterDetails from './components/Characters/CharacterDetails/CharacterDetails'
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
function App() {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
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
        const { data } = await axios.get('https://rickandmortyapi.com/api/character')
        setCharacters(data.results.slice(0, 5))
      } catch (error) {
        toast.error(error.response.data.error)
      } finally {
        setIsLoading(false)
      }
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
  }, [])

  return (
    <>
      <Toaster />
      <Navbar />
      <main>
        <Characters>
          {characters.map(character => <Character character={character} key={character.id} setCharacter={setCharacter} />)}
        </Characters>
        {/* <CharacterDetails character={character || characters[0] || []} /> */}
      </main>

    </>
  )
}

export default App
