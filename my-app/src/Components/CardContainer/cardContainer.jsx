import React from 'react'
import { useWeatherContext } from '../Context/weatherContext'
import Card from '../Card/card'
function CardContainer() {
    var data = useWeatherContext();
  return (
    <div>
    {
        data.weather.map((item,index)=>{return <Card key={index} id={index}></Card>})
    }
    </div>
  )
}

export default CardContainer