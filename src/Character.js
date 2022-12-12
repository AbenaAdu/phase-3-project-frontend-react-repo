function Character ({characterDisplayed, deleteCharacter, updateCart}){
    const{id, name, alignment, catchphrase, personality, strength, weakness, background, cart} = characterDisplayed[0]

    function handleDelete() {
        fetch(`http://localhost:9292/characters/${id}`, {
            method: "DELETE",
          })
          .then(response => response.json())
          .then(() => {
            deleteCharacter(id)
          })
    }

    function handleCartClick(){

        fetch(`http://localhost:9292/characters/${id}`, {
          method: 'PATCH', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({cart : !characterDisplayed.cart}),
        })
        .then(response => response.json())
        .then(data => updateCart(data))
      }


    return (
        <div>
        <img src={characterDisplayed.img_url}/>
        <h2>Name:{name}</h2>
        <p>{alignment}</p>
        <p>{catchphrase}</p>
        <p>{personality}</p>
        <p>{strength}</p>
        <p>{weakness}</p>
        <p>{background}</p>
        <button onClick={handleCartClick} id="add-to-cart">
        Purchase Physical Copy {cart ? "Get Physical Copy" : "Remove From Cart"} 
      </button>
        <button onClick={handleDelete}>Click to Delete Character</button>
    </div>
  
    )
    
}

export default Character;

