import './App.css'
import Navbar from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import CharacterDetails from './components/Characters/CharacterDetails/CharacterDetails'
import { allCharacters } from './data/characters';
import { useState } from 'react';

function App() {
  const [character, setCharacter] = useState(null)
  return (
    <>
      <Navbar />
      <main>
        <Characters allCharacters={allCharacters}  setCharacter={setCharacter}/>
        <CharacterDetails character={character || allCharacters[0]}/>
      </main>

    </>
  )
}

export default App
