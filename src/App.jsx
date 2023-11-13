import './App.css'
import Navbar from './components/Navbar/Navbar'
import Characters from './components/Characters/Characters'
import Character from './components/Characters/Character/Character';
import CharacterDetails from './components/Characters/CharacterDetails/CharacterDetails'
import { allCharacters } from './data/characters';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(allCharacters)
  const [character, setCharacter] = useState(null)
  return (
    <>
      <Navbar />
      <main>
        <Characters>
          {characters.map(character => <Character character={character} key={character.id} setCharacter={setCharacter} />)}
        </Characters>
        <CharacterDetails character={character || allCharacters[0]} />
      </main>

    </>
  )
}

export default App
