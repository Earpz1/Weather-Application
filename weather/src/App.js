import 'bootstrap/dist/css/bootstrap.min.css'
import GetWeather from './Components/GetWeather'
import Navigation from './Components/Navigation'
import Search from './Components/Search'
import WeatherCard from './Components/WeatherCard'
import DefaultWeather from './Components/DefaultWeather'
import CitySearch from './Components/CitySearch'
import './App.css'

function App() {
  return (
    <div className="App">
      <GetWeather Query="New York" />
      <GetWeather Query="London" />
      <GetWeather Query="Berlin" />
      <GetWeather Query="Rome" />

      <Navigation />
      <Search />

      <div className="d-flex">
        <DefaultWeather />
      </div>
    </div>
  )
}

export default App
