import { useContext } from "react";
import { useWeatherContext } from "../Context/weatherContext";
function Header() {
  var { cityList, setSelectedCity, selectedCity } = useWeatherContext();
  const handlerChange = (e) => {   
    setSelectedCity(e.target.value);
  };

  return (
    <div className="Header">
      <select className="Cities" name="cities" id="cities" onChange={handlerChange} value={selectedCity}>
        {cityList.map((cityItem) => {
          return (
            <option key={cityItem.id} value={cityItem.id}>
              {cityItem.name}
            </option>           
          );
        })}
        ;
      </select>
    </div>
  );
}

export default Header;
