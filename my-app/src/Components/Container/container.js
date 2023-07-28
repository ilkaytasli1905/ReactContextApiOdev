import {useContext} from 'react'
import Header from '../Header/header'
import {useWeatherContext} from '../Context/weatherContext';
import CardContainer from '../CardContainer/cardContainer';

function Container() {
  return (
    <>
    <Header/>
    <CardContainer/>
    </>
  )
}

export default Container