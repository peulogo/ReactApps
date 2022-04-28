import React from 'react'

function CartDrawer({name, price, img, id, removeToCart}) {
  return (
        <div className="cart__menu-item item">
            <img className='item__img' src={"/img/" + img + ".png"} alt="" />
            <div className="item__text">
              <p>{name}</p>
              <b>{price} руб.</b>
            </div>
            <button onClick={() => removeToCart({name, price, img, id})} className='item__dismiss-button button cross'>
              <img src="./img/plus.svg" alt="" />
            </button>
        </div>
  )
}

export default CartDrawer