import React,{useEffect, useState} from 'react'
import './App.css';
import Events from './Events'
import Form from './Form'
import CharacterDisplay from './CharacterDisplay'
import CartPage from './CartPage'

function App() {
    const [characters, setCharacters] = useState([])
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

        function deleteCharacter(id) {
            const deletedCharacters = characters.filter(character => {
              return character.id !== id
            })
            setCharacters(deletedCharacters)
          }

          function updateCart(updatedCharacter) {
            const updatedCharacters = characters.map(character=> {
              if (character.id === updatedCharacter.id) {
                return updatedCharacter
              } else return character
            })
            setCharacters(updatedCharacters) 
          }
          const cartCharacters = characters.filter(character => {
            if (character.cart === true) {
              return character
            } 
          })
        return (
            <div>
            <CharacterDisplay key={characters.id} characters={characters} updateCart={updateCart} deleteCharacter={deleteCharacter}/>
                {events.map((event)=>{
                    return <Events key={event.id} event={event}/>})}
                <Form makeCharacter={makeCharacter}/>
                <CartPage cartCharacters={cartCharacters}/>


            </div>
        )
}

export default App;


