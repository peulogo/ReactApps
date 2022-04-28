import React from 'react'
import CartDrawer from './CartDrawer'
import CartEmpty from './CartEmpty'
import Total from './Total'


function Drawer({cartClose, items =[], removeToCart, addToCartCount, setCartOpened, cartOpened}) {

  document.body.style.overflow= cartOpened ? 'hidden' : 'visible'

  const visible = () => {
    setCartOpened(false)
  }

  return (
    <div className={cartOpened ? "overlay active" : "overlay" }>
    <div className= {cartOpened ? 'cart__menu active' : "cart__menu" }>
      <div className="cart__menu-header">        
        <h3>Корзина</h3>
        <button onClick={visible} className='cart__menu-close button cross'>
          <img src="./img/plus.svg" alt="" />
        </button></div>
     {items.length > 0 ? <div className="cart__menu-container">
      {items.map((obj) => <CartDrawer {...obj} removeToCart={removeToCart} key={obj.id} />)}
      </div>:<CartEmpty visible={visible}/>}
      {items.length > 0 ? <Total 
      addToCartCount={addToCartCount}
      /> : null}
    </div>
  </div>
  )
}

export default Drawer