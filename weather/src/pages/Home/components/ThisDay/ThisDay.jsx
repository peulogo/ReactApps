import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'
import s from './ThisDay.module.scss'


function ThisDay(props) {
console.log(props);
return (
    <header className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
        <div className={s.this__temp}>{Math.round(props.main.temp - 273) > 0 ? `+${Math.round(props.main.temp - 273)}` : Math.round(props.main.temp - 273)}°</div>
        <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id={props.weather[0].icon.slice(0, -1)}/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время : <span>{props.date.hourse}:{props.date.minutes < 10 ? '0' + props.date.minutes : props.date.minutes}</span>
        </div>
        <div className={s.this__city}>
          Город: {props.name}
        </div>
      </div>
    </header>
)
}

export default ThisDay

