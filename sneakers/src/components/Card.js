import React, {useEffect, useState} from 'react'
import ContentLoader from 'react-content-loader'

function Card({name, price, img, id, addToCart, getCartPrice ,onAddToFavorite, favorited=false, cartItemsAdded, isLoading = false, cartItems}) {
  
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorited)

  useEffect(() => {
    setIsAdded(cartItemsAdded(price))
  }, [cartItems])


  const addFav = () => {
    setIsAdded(!isAdded)
    addToCart({name, price, img, id})
  }

  const addLike = () => {
    setIsFavorite(!isFavorite)
    onAddToFavorite({name, price, img, id})
  }


    
  return (
    <div className='card'>
      {
        isLoading ? 
        <ContentLoader 
        speed={2}
        width={150}
        height={265}
        viewBox="0 0 150 265"
        backgroundColor="#d4d4d4"
        foregroundColor="#ecebeb"
      >
        <rect x="161" y="214" rx="0" ry="0" width="1" height="0" /> 
        <rect x="0" y="151" rx="5" ry="5" width="150" height="15" /> 
        <rect x="0" y="212" rx="5" ry="5" width="80" height="25" /> 
        <rect x="0" y="24" rx="5" ry="5" width="150" height="112" /> 
        <rect x="0" y="171" rx="5" ry="5" width="80" height="15" /> 
        <rect x="118" y="208" rx="10" ry="10" width="32" height="32" />
      </ContentLoader> 
      
      :
        <>
                    <div className="card__wrapper item">
              <button className={isFavorite ? 'item__like-button active' : 'item__like-button'} onClick={addLike}>
              {isFavorite ? <img className='accept' src='/img/like.svg' alt="" /> : <img className='plus' src='/img/unlike.png' alt="" />}
              </button>
              <div className="item__icon-wrapper">
                <img width='133px' height='112px' src={"/img/" + img + ".png"} alt="" />
              </div>
              <div className="item__title">
                  <p>{name}</p>
              </div>
              <div className="item__price">
                <div className="item__price-info">
                  <p>Цена:</p>
                  <b>{price} руб.</b>
                </div>
                <button className={isAdded ? 'add-to-cart active' : 'add-to-cart'} onClick={addFav}>
                  {isAdded ? <img className='accept' src='/img/accept.svg' alt="" /> : <img className='plus' src='/img/plus.svg' alt="" />}
                </button>
              </div>
            </div>
        </>
      }
          </div>
  )
}

export default Card