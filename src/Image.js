import React, {useEffect, useState} from 'react';

function Image({featuredCharacter}) {
    const{name, alignment, catchphrase, personality, strength, weakness, background} = featuredCharacter

    

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
        <button>Click to Delete Character</button>
    </div>
  
    )
}
export default Image

//Create functionality for delete button onClick
//const [button, setButton] =useState()