import React,{useState} from 'react'

function Form({makeCharacter}){

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [alignment, setAlignment] = useState("")
    const [catchphrase, setCatchphrase] = useState("")
    const [personality, setPersonality] = useState("")
    const [strength, setStrength] = useState("")
    const [weakness, setWeakness] = useState("")
    const [background, setBackground] = useState("")

    function handleForm(e){
        e.preventDefault()
        fetch ("http://localhost:9292/characters", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            name: name, 
            image: image,
            alignment: alignment,
            catchphrase: catchphrase,
            personality: personality,
            strength: strength,
            weakness: weakness,
            background:background})
          })
          .then (res => res.json())
          .then (data => makeCharacter(data)) 
        }
    

    return (
           <form onSubmit={handleForm}>
            <input type='text' placeholder="name" value={name} onChange = {(e)=> setName(e.target.value)} />
            <input type='text' placeholder="image" value={image} onChange = {(e)=> setImage(e.target.value)}/>
            <input type='text' placeholder="alignment" value={alignment} onChange = {(e)=> setAlignment(e.target.value)}/>
            <input type='text' placeholder="catchphrase"value={catchphrase} onChange = {(e)=> setCatchphrase(e.target.value)}/>
            <input type='text' placeholder="personality" value={personality} onChange = {(e)=> setPersonality(e.target.value)}/>
            <input type='text' placeholder="strength"value={strength} onChange = {(e)=> setStrength(e.target.value)}/>
            <input type='text' placeholder="weakness"value={weakness} onChange = {(e)=> setWeakness(e.target.value)}/>
            <input type='text' placeholder="background"value={background} onChange = {(e)=> setBackground(e.target.value)}/>
            <div>
            <button type='submit' class="submit">Submit</button>
            </div>
           </form>
    )
}

export default Form
               