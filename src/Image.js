import React, {useEffect, useState} from 'react';

function Image({featuredCharacter, deleteCharacter}) {
    const{name, alignment, catchphrase, personality, strength, weakness, background} = featuredCharacter

    function handleDelete() {
        fetch(`http://localhost:9292/characters/${id}`, {
            method: "DELETE",
          })
          .then(response => response.json())
          .then(() => {
            deleteCharacter(id)
          })
    }

    return(
        <div className="image">
        <img src={featuredCharacter.img_url}/>
        <h2>{name}</h2>
        <p>{alignment}</p>
        <p>{catchphrase}</p>
        <p>{personality}</p>
        <p>{strength}</p>
        <p>{weakness}</p>
        <p>{background}</p>
        <button onClick={handleDelete}>Click to Delete Character</button>
    </div>
  
    )
}
export default Image

//Create functionality for delete button onClick
//const [button, setButton] =useState()