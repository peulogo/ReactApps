import React, { useState } from 'react'
import Week from './pages/Home/components/Week/Week'
import Home from './pages/Home/Home'
import Header from './shared/Header/Header'
import s from './App.module.scss'


function App() {
  const [weatherWeek, setWeatherWeek] = useState(false)
  const [dayBar, setDayBar] = useState(false)
  // const [city, setCity] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [lat, setLat] = useState(56.088910)
  const [lon, setLon] = useState(49.875402)
  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=56.088910&lon=49.875402&exclude=dayli&appid=ad1593fa346cb5a187f4f973e21e42c8&lang=RU&units=metric`)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     setWeatherWeek(data.daily.filter((item, index) => index !== 0))
  //   })
  // }, [])

  console.log('dasd' , weatherWeek);
  const changeCity = (lat, lon) => {
    setLat(lat)
    setLat(lon)
  }

  const cancle = () => {
    setDayBar(false)
  }
  const active = async() => {
    if(!loaded){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=dayli&appid=ad1593fa346cb5a187f4f973e21e42c8&lang=RU&units=metric`)
    .then(resp => resp.json())
    .then(data => {
      setWeatherWeek(data.daily.filter((item, index) => index !== 0))
    })
    .then(() => setDayBar(prev => true))
    .then(() => setLoaded(true))
  } else {setDayBar(true)}
}


  return (
    <div className="container">
        <Header lat={lat} lon={lon}/>
        <Home lat={lat} lon={lon}/>
        <div className={s.infoMenu}>
          <div className={s.dateBar}>
            <div className={s.selectDate}>
            <button onClick={() => {
              active()
            }
            }
            className={dayBar ? s.active : null}>На неделю</button>
            <button className={s.noActive}>На 10 дней</button>
            <button className={s.noActive}>На месяц</button>
            </div>
            <button onClick={() => cancle()} className={dayBar ? null : s.cancle}>Отменить</button>
          </div>
          <div className={dayBar ? s.headeractive : s.header}>
            {weatherWeek ? 
            weatherWeek.map(item => <Week {...item}/> ) 
            :
            null
            }
          </div>
        </div>
    </div>
  )
}

export default App
