import React,{useEffect, useState} from 'react'
import Character from './Character'

function CharacterDisplay({characters, setFeaturedCharacter}) {



        return (
            <div >
            <label for="character names">Choose a character:</label>
            <select name="character" id="character">
            {characters.map((character)=>{
                return <Character key={character.id} character={character} setFeaturedCharacter={setFeaturedCharacter}/>
            })}
            </select>
            </div>
        )
}

export default CharacterDisplay;