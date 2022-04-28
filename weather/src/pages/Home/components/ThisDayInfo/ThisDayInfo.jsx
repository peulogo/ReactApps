import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './ThisDayInfo.module.scss'
import img from '../../../../assets/images/cloud.png'
function ThisDayInfo(props) {

let items =[
    {
        img: 'temp',
        title: 'Температура',
        suptitle: `${Math.round(props.main.temp - 273)}° - ощущается как ${Math.round(props.main.feels_like - 273)}°`
    },
    {
        img: 'preesure',
        title: 'Давление',
        suptitle: `${Math.round(props.main.pressure * 0.750064)} мм рт.ст.`
    },
    {
        img: 'drop',
        title: 'Осадки',
        suptitle: `${props.weather[0].description[0].toUpperCase()}${props.weather[0].description.slice(1)}`
    },
    {
        img: 'wind',
        title: 'Ветер',
        suptitle: `${Math.round(props.wind.speed)} м/с`
    }
]
return (
    <header className={s.header}>
        <div className={s.info}>
         {items.map(item => 
           <div className={s.info_item}>
                <div className={s.item_title}>
                    <div className={s.img}><GlobalSvgSelector id={item.img} /></div>
                    <p className={s.info_item_title}>{item.title}</p>
                </div>
                <p className={s.info_item_suptitle}>{item.suptitle}</p>
            </div>
            )}
        </div>
        <img className={s.cloud} src={img} alt="" />
    </header>
)
}

export default ThisDayInfo