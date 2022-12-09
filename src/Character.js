import React,{useEffect, useState} from 'react'

function Character ({character, showCharacter, setFeaturedCharacter}){

    function showCharacter(){
        setFeaturedCharacter(character)
    }

    return (
        <option value="name" onClick={showCharacter}>{character.name}</option>  
    )
}

export default Character;