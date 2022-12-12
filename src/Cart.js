function Cart({cartCharacter}) {
    const{name, alignment, catchphrase, personality, strength, weakness, background} = cartCharacter
    
    return(
        <div className="image">
        <h2>{name}</h2>
        <p>{alignment}</p>
        <p>{catchphrase}</p>
        <p>{personality}</p>
        <p>{strength}</p>
        <p>{weakness}</p>
        <p>{background}</p>
    </div>
  
    )

    

}

export default Cart;