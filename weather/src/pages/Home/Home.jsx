import React, {useEffect, useState} from 'react' 
import Loader from './components/Loader/Loader'
import LoaderSec from './components/Loader/LoaderSec'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'


function Home({lat, lon}) {
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad1593fa346cb5a187f4f973e21e42c8&lang=RU`)
    .then(resp => resp.json())
    .then(data => {
       setWeather({...data, date: {
         hourse: new Date().getHours(),
         minutes: new Date().getMinutes()
       }})
    })

  }, [lat, lon])
  // console.log(weather);
  return (
    <div className={s.home}>
        {weather ? <ThisDay {...weather}/> : <Loader />}
        {weather ? <ThisDayInfo {...weather}/> : <LoaderSec />}
    </div>
  )
}

export default Home
