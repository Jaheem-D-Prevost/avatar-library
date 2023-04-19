import {useState, useEffect} from 'react';
import CharacterCard from './CharacterCard';

export default function Home() {
  const [characterId, setCharacterId] = useState(null);
  const [character, setCharacter] = useState(null);
  const [query, setQuery] = useState('');

  function searchQuery(e) {
    const { value } = e.target;

    if (e.key === "Enter") {
      setQuery(value);
    }
  }

  useEffect( () => {
    const fetchCharacters = async () => {
      const res = await fetch('https://last-airbender-api.fly.dev/api/v1/characters?perPage=497');
      const characters = await res.json();
      const character = characters.find(character => {
        const name = character.name.toLowerCase();
        return name.includes(query.toLowerCase());
      });
      setCharacterId(character._id);
    };
    if (query) {
      fetchCharacters(); 
    }
  }, [query]);   
  
  useEffect(() => {
    if (!characterId) {
      return;
    }

    const fetchCharacter = async () => {
      const res = await fetch(`https://last-airbender-api.fly.dev/api/v1/characters/${characterId}`);
      const character = await res.json();
      setCharacter(character);
    };

    fetchCharacter();
  }, [characterId]);
  return (
    <main className='main'>
      <input className="search-field" onKeyDown={e => searchQuery(e)} type='search' placeholder='Search for a character...'/>

      {character ? 
      <CharacterCard characterData={character} /> 
      : <p>No Character Found</p>}
    </main>
  )
}
