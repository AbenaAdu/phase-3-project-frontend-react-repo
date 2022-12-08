import React,{useEffect, useState} from 'react'
import './App.css';
import Image from './Image'
import Events from './Events'
import Form from './Form'

function App() {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        fetch ("http://localhost:9292/characters")
        .then(res => res.json())
        .then(data => setCharacters(data))
        },[])

        // const eachCharacter = characters.map(character => {
        //     return <CharacterDisplay key={character.id} character={character}/>
        // })
        return (
            <div>
            <CharacterDisplay characters={characters}/>
                <Image characters={characters}/>
                <Events />
                <Form />
            </div>
        )
}

export default App;


