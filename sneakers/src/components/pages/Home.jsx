import React from 'react'

import Card from '../Card';

function Home({items,
    searchValue,
    addToCart,
    onAddToFavorite,
    onChangeSearchInput,
    cartItemsAdded,
    getCartPrice,
    cartItems,
    isLoading,}) {


      const renderItems = () => {
        const filtredItems = items.filter(item => item.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
        return (isLoading ? [...Array(8)] : filtredItems)
        .map((obj,index) => <Card
        key={index} 
        {...obj}
        addToCart ={addToCart}
        onAddToFavorite={onAddToFavorite}
        cartItemsAdded={cartItemsAdded}
        isLoading ={isLoading}
        getCartPrice={getCartPrice}
        cartItems={cartItems}
        />)
      }
  return (
    <div className="content">
    <div className='content__header'>
      <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
      <div className='cearch__block'>
        <img src="/img/search.svg" alt="" />
        <input onChange={onChangeSearchInput} className='cearch' type="text" placeholder='Поиск...'/>
      </div>
    </div>
    <div className="sneakers">
      {renderItems()}
      </div>
  </div>
  )
}

export default Home