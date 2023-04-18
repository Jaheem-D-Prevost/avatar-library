import {useState, useEffect} from 'react';
import CharacterCard from './CharacterCard';
export default function Home() {
  const [characterData, setCharacterData] = useState(null);
  return (
    <main className='main'>
      <input type='search' placeholder='Search for a character...'/>
    </main>
  )
}
