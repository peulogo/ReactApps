import React from 'react'

function CartEmpty({visible}) {
  return (
    <div className="cart__empty-block">
    <img src="./img/empty.png" alt="" />
    <h2>Корзина пустая</h2>
    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
    <button onClick={visible}>
    <p className='but'>Вернуться назад</p>
    </button>
    </div>
  )
}

export default CartEmpty