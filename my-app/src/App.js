import logo from './logo.svg';
import './App.css';
import {WeatherProvider} from './Components/Context/weatherContext';
import Container from './Components/Container/container';

function App() {
  return (
    <div className="App">
        <WeatherProvider>
            <Container/> 
        </WeatherProvider>
    </div>
  );
}

export default App;
