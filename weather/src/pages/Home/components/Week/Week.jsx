import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './Week.module.scss'

function Week(props) {
    // console.log(props);
    let a = new Date(props.dt * 1000)
    var days = [
        'Вc',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб'
      ];
  return (
    <div className={s.card}>
        <div className={s.day}>
            <p className={s.day_day}>{days[a.getDay()]}</p>
            <p className={s.day_date}>{a.getDate() + " " + a.toLocaleString('default', { month: 'short' })}</p>
        </div>
        <GlobalSvgSelector id={props.weather[0].icon.slice(0, -1)}/>
        <div className={s.temp}>
        <h1>+{Math.round(props.temp.day)}°</h1>
        <h2>+{Math.round(props.temp.night)}°</h2>
        </div>
        <div className={s.description}>
        <p>{props.weather[0].description[0].toUpperCase() + props.weather[0].description.slice(1)}</p>
        </div>
    </div>
  )
}

export default Week