import React from 'react'; 
import axios from 'axios';
import { useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Favorites from './components/pages/Favorites';
import Home from './components/pages/Home';

import './index.scss';

export const AppContext = React.createContext

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [addToCartCount, setAddToCartCount] = useState('')


  useEffect(() => {
   async function fetchData() {
    const cartRes =  await axios.get('https://624bf6b671e21eebbcf82d2c.mockapi.io/cart')
    const favoriteRes = await axios.get('https://624bf6b671e21eebbcf82d2c.mockapi.io/favorites')
    const itemsRes = await axios.get('https://624bf6b671e21eebbcf82d2c.mockapi.io/items')
    
    setIsLoading(false)
    setCartItems(cartRes.data)
    setFavorites(favoriteRes.data)
    setItems(itemsRes.data)
    setAddToCartCount(() => {
      let count = Number()
      for (let elem of cartRes.data) {
        count += elem.price
      }
      return count
    })
   }
   fetchData()
  }, [])

  
  const getCartPrice = (cartItems) => {
    let count = Number()
    for (let item in cartItems){
      console.log(item.price);
      count += item.price
    };
    return setAddToCartCount(count)
  }
  
  const cartItemsAdded = (price) =>{
    return cartItems.find(item => Number(item.price) ===  Number(price))
  }


  const addToCart = async (obj) =>{
    if(cartItems.find(item => Number(item.id) ===  Number(obj.id))) {
    axios.delete(`https://624bf6b671e21eebbcf82d2c.mockapi.io/cart/${Number(obj.id)}`)
      setCartItems( prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      setAddToCartCount((prev) => prev - Number(obj.price))
    } else {
      setAddToCartCount((prev) => prev + Number(obj.price))
      axios.post('https://624bf6b671e21eebbcf82d2c.mockapi.io/cart', obj)
      setCartItems(prev => [...prev, obj])
    }
  }

  const removeToCart = (obj) =>{
    axios.delete(`https://624bf6b671e21eebbcf82d2c.mockapi.io/cart/${obj.id}`)
    setCartItems( prev => prev.filter(item => item.id !== obj.id))
    setAddToCartCount((prev) => prev - Number(obj.price))
  }

  const onAddToFavorite = async (obj) =>{
    try {
      if(favorites.find(facObj => facObj.id === obj.id)){
    axios.delete(`https://624bf6b671e21eebbcf82d2c.mockapi.io/favorites/${obj.id}`)
    } else {
      const {data} = await axios.post('https://624bf6b671e21eebbcf82d2c.mockapi.io/favorites', obj)
      setFavorites(prev => [...prev, data])
    }
  } catch(error){ 
    alert('не удалось добавить в фавориты')
  }
   }

  //  cartClose={() => setCartOpened(false)}
  // add={() => setCartOpened(true)
const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value)
}
  return (
      <div className="wrapper">
        {/* {cartOpened ? <Drawer setCartOpened={setCartOpened} items={cartItems} removeToCart={removeToCart} addToCartCount={addToCartCount}/> : null } */}



        {<Drawer setCartOpened={setCartOpened} items={cartItems} removeToCart={removeToCart} addToCartCount={addToCartCount} cartOpened={cartOpened}/>}



        <Header add={() => setCartOpened(true) } cartItems={cartItems} addToCartCount={addToCartCount}/>
      <hr />
      <Routes>
        <Route path="/" element={<Home 
        items={items}
        searchValue={searchValue}
        addToCart={addToCart}
        removeToCart={removeToCart}
        onAddToFavorite={onAddToFavorite}
        onChangeSearchInput={onChangeSearchInput}
        cartItemsAdded={cartItemsAdded}
        isLoading = {isLoading}
        getCartPrice={getCartPrice}
        cartItems={cartItems}
        />}
        />

        <Route path="/favorites" element={<Favorites
         favorites={favorites}
         addToCart={addToCart}
         removeToCart={removeToCart}
         onAddToFavorite={onAddToFavorite}
         cartItemsAdded={cartItemsAdded}
         />}
         />

      </Routes>
    </div>
  );
}

export default App;
