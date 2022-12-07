import React from 'react';

function Form(){

    return (
        <div>
            <form onSubmit>
                <h2>Create Character</h2>
                <input type='text'>Name</input>
                <input type='text'>Alignment</input>
                <input type='text'>Catchphrase</input>
                <input type='text'>Personality</input>
                <input type='text'>Strength</input>
                <input type='text'>Weakness</input>
                <input type='text'>Background</input>
            </form>
        </div>
    )
}

export default Form