import React from 'react'
import { useWeatherContext } from '../Context/weatherContext'
function Card({id}) {
var data = useWeatherContext();
var weather = data.weather[id];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className={id==0 ? "FirstCard CardOutDiv" : "CardOutDiv"}>
        <div id="Day">{days[new Date(weather.dt*1000).getDay()]}</div>
        <div id="Image"> <img
                className="icon"
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt="weather icon"
              /></div>
        <div>
            <div style={{display:'inline'}}>{Math.floor(weather.temp.max)}</div>
            <div style={{display:'inline', marginLeft:'10px'}}>{Math.floor(weather.temp.min)}</div>
        </div>
    </div>
  )
}

export default Card