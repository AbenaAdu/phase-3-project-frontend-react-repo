import React,{useEffect, useState} from 'react'

function CharacterDisplay({characters}) {

    const {name} = character

        return (
            <div >
            <label for="character names">Choose a character:</label>
                <select name="character" id="character">
                    <option value="name1">{character.name}</option>
                    <option value="name2">{character.name}</option>
                    <option value="name3">{character.name}</option>
                    <option value="name4">{character.name}</option>
                </select>
            </div>
        )
}

export default CharacterDisplay;