import 'bootstrap/dist/css/bootstrap.min.css'
import GetWeather from './Components/GetWeather'
import Navigation from './Components/Navigation'
import Search from './Components/Search'
import WeatherCard from './Components/WeatherCard'
import CitySearch from './Components/CitySearch'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Search />

      <div className="d-flex">
        <WeatherCard />
      </div>
    </div>
  )
}

export default App
