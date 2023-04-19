
export default function CharacterCard({characterData}) {
  return (
    <div className="character-card">
      <img className="character-img" src={characterData.photoUrl} alt={characterData.name}/>
      <div className="character-info">
        <p><span>Name:</span> {characterData.name || 'N/A'}</p>
        <p><span>Gender:</span> {characterData.gender || 'N/A'}</p>
        <p><span>Eye Color:</span> {characterData.eye || 'N/A'}</p>
        <p><span>Hair Color:</span> {characterData.hair || 'N/A'}</p>
        <p><span>Skin Color:</span> {characterData.skin || 'N/A'}</p>
        <p><span>Weapon:</span> {characterData.weapon || 'N/A'}</p>
        <p><span>Allies:</span> {characterData.allies.join(', ')}</p>
        <p><span>Enemies:</span> {characterData.enemies.join(', ')}</p>
        <p><span>Profession:</span> {characterData.profession || 'N/A'}</p>
        <p><span>Position:</span> {characterData.position || 'N/A'}</p>
        <p><span>Predecessor:</span> {characterData.predecessor || 'N/A'}</p>
        <p><span>Affiliation:</span> {characterData.affiliation || 'N/A'}</p>
      </div>
    </div>
  )
}
