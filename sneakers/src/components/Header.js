import React from 'react'
import { Link } from 'react-router-dom'


function Header({add, cartItems, addToCartCount}) {
  
  return (
    <header>
      <Link to="/">
        <div className='header__link'>
        <img src="/img/logo.png" alt="" width={40} height={40}/>
                <div className='header__info'>
                  <h3>React Sneakers</h3>
                  <p>Магазин лучших кроссовок</p>
                </div>
        </div>
    </Link>
    <nav className='nav'>
      <ul className='nav__list'>
        <li onClick={add}><img width={18} height={18} src="/img/card.svg" alt="" /><span> {addToCartCount === 0 ? '' : addToCartCount}</span></li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/like1.svg" alt="" />
          </Link>
        </li>
        <li><img width={18} height={18} src="/img/user.svg" alt="" /></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header