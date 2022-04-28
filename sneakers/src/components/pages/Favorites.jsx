import Card from "../Card"
import React, { useEffect, useState } from 'react'
import axios from "axios"

function Favorites(
    {favorites =[],
    addToCart,
    removeToCart,
    onAddToFavorite,
    cartItemsAdded}) {

    const [first, setFirst] = useState([])
    useEffect(() => {
    axios.get('https://624bf6b671e21eebbcf82d2c.mockapi.io/favorites').then(res => {
        setFirst(res.data)
        })
    }, [])
    
  return (
    <div className="content">
    <div className='content__header'>
      <h1>Мои закладки</h1>
      <div className='cearch__block'>
        <img src="/img/search.svg" alt="" />
        <input className='cearch' type="text" placeholder='Поиск...'/>
      </div>
    </div>
    <div className="sneakers">
    {first.map((obj,index) => <Card
      key={index} 
      {...obj}
      addToCart ={addToCart}
      removeToCart={removeToCart}
      favorited = {true}
      onAddToFavorite={onAddToFavorite}
      cartItemsAdded={cartItemsAdded}
      />)}
    </div>
  </div>
  )
}

export default Favorites