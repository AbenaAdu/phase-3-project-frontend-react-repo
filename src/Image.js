import React from 'react';

function Image({character}) {
    const{name, alignment, catchphrase, personality, strength, weakness, background} = character
    return(
        <div className="image">
        <img src=''/>
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