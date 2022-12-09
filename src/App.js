import React,{useEffect, useState} from 'react'
import './App.css';
import Image from './Image'
import Events from './Events'
import Form from './Form'
import CharacterDisplay from './CharacterDisplay'

function App() {
    const [characters, setCharacters] = useState([])
    const [featuredCharacter, setFeaturedCharacter] = useState([])
    const [events, setEvents] = useState([])
    const [newCharacter, setNewCharacter] = useState([])

    useEffect(()=> {
        fetch ("http://localhost:9292/characters")
        .then(res => res.json())
        .then(data => setCharacters(data))
        },[])

        useEffect(()=>{
            fetch("http://localhost:9292/events")
            .then(res => res.json())
            .then(data => setEvents(data))
        },[])

        function makeCharacter(info){
            const newCharacterArray = [...characters, info]
            setNewCharacter(newCharacterArray)
        }

        return (
            <div>
            <CharacterDisplay key={characters.id} characters={characters} setFeaturedCharacter={setFeaturedCharacter}/>
                <Image featuredCharacter={featuredCharacter}/>
                {events.map((event)=>{
                    return <Events key={event.id} event={event}/>})}
                <Form makeCharacter={makeCharacter}/>
            </div>
        )
}

export default App;


