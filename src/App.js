import React from 'react'
import './App.css';
import Image from './Image'
import Events from './Events'
import Form from './Form'

function App() {
        return (
            <div >
            <label for="character names">Choose a character:</label>
                <select name="character" id="character">
                    <option value="name1">Name1</option>
                    <option value="name2">name2</option>
                    <option value="name3">name3</option>
                    <option value="name4">Name4</option>
                </select>
                <Image />
                <Events />
                <Form />
            </div>
        )
}

export default App;
