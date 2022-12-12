import Cart from "./Cart"

function CartPage({cartCharacters}) {
    const eachCartCharacter = cartCharacters.map(cartCharacter => {
        return <Cart key={cartCharacter.id} cartCharacter={cartCharacter} />
      })
      
      return (
        <div id="cart_page">
          <div>
          <h1>Purchase Your Physical Character Cards Here </h1>
          {eachCartCharacter}
        </div>
       </div>
      )
    }


export default CartPage