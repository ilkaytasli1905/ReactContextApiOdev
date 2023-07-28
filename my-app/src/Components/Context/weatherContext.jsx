import { useContext, useState, useEffect, createContext } from "react";
import cityList from "../Data/cities.json";
import axios from "axios";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState([]);
  const [selectedCity, setSelectedCity] = useState(34);
  const values = {
    selectedCity,
    setSelectedCity,
    weather,
    setWeather,
    cityList,
  };

  useEffect(() => {
    const selectCities = cityList.filter((item) => item.id == selectedCity)[0];
    const key = "0ec4e02b18b45ffb135e30ccff9ee6a2";
    axios(
      `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${selectCities.latitude}&lon=${selectCities.longitude}&cnt=7&appid=${key}&units=metric`
    )  
    .then((res) => res.data)
    .then((res)=>res.list)
    .then((res) =>{
        setWeather(res);
    })
    .catch((e)=> console.log("hata"))
  }, [selectedCity]);
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export const useWeatherContext = () => useContext(WeatherContext);
