import {useState} from 'react'
import Character from './Character'

function CharacterDisplay({characters, deleteCharacter, updateCart}) {
    const [selected, setSelected] = useState("Carl")

    function showCharacter(e){
        setSelected(e.target.value)
        // console.log(e.target.value)
    }
    const characterDisplayed = characters.filter((character) => {
        return character.name === selected;
      });

        return (
            <div class="label" >
            <label for="character names">Choose a character:</label>
            <select onChange={showCharacter}>
            {characters.map((character)=>{
                return   <option value={character.name}>{character.name}</option>  
            })}
            </select>
            <Character key={characterDisplayed.id} characterDisplayed={characterDisplayed} deleteCharacter={deleteCharacter} updateCart={updateCart}/>

            </div>
        )
}

export default CharacterDisplay;