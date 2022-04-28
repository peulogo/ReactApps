import React from 'react'

function Total({addToCartCount}) {
  return (
    <div>
        <ul className='cart-total-block'>
    <li>
      <span>Итого:</span>
      <div></div>
      <b>{addToCartCount} руб.</b>
    </li>
    <li>
      <span>Налог 5%:</span>
      <div></div>
      <b>{Math.round(addToCartCount * 0.05)} руб.</b>
    </li>
  </ul>
  <button className='offer__accept'>
    Оформить заказ
    <img src="" alt="" />
  </button>
  </div>
  )
}

export default Total