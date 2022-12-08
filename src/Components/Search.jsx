import { Form, Button, ToastBody } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WeatherCard from './WeatherCard'
import CitySearch from './CitySearch'

const Search = () => {
  const dispatch = useDispatch()
  const units = useSelector((state) => state.units)

  const [weatherData, setweatherData] = useState('')
  const [Query, setQuery] = useState('')
  const [searchMade, setSearchMade] = useState(false)
  const [isError, setisError] = useState(false)
  const [error, seterror] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    fetchWeather(Query)
  }, [units])

  const fetchWeather = async (event) => {
    if (Query === '') {
      return
    }

    try {
      let response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
          Query +
          '&appid=8c1b60ad01126a2d8883709df2ba5cdc&u&units=' +
          units,
      )
      if (!response.ok) {
        throw new Error(`City name not found`)
      }
      if (response.ok) {
        console.log(response.status)
        let weatherData = await response.json()
        dispatch({
          type: 'SET_SEARCH_WEATHER',
          payload: weatherData,
        })
        console.log(weatherData)
        setSearchMade(true)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <Form
          onSubmit={(event) => {
            event.preventDefault()
            fetchWeather()
          }}
        >
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter your Location..."
              className="mt-5 searchBox text-center"
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="primary"
              className="mt-2 searchButton"
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
      {isError && <h1>{error}</h1>}
      <div className="d-flex">{searchMade && <CitySearch />}</div>
    </>
  )
}

export default Search
