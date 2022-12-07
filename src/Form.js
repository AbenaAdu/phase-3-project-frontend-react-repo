import React from 'react';

function Form(){

    return (
        <div className="form">
           <form>
           <input type='text' placeholder="name"></input>
            <input type='text' placeholder="alignment"></input>
            <input type='text' placeholder="catchphrase"></input>
            <input type='text' placeholder="personality"></input>
            <input type='text' placeholder="strength"></input>
            <input type='text' placeholder="weakness"></input>
            <input type='text' placeholder="background"></input>
            <button type='submit'>Submit</button>
           </form>
        </div>
    )
}

export default Form


               