import { Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../redux/actions'

const WeatherCard = (props) => {
  const dispatch = useDispatch()
  const weatherData = useSelector((state) => state.weatherDefault.content)
  const units = useSelector((state) => state.units)
  const suffix = useSelector((state) => state.suffix)
  const [cities, setcities] = useState(['Rome', 'London', 'Berlin', 'New York'])

  useEffect(() => {
    cities.forEach((city) => {
      dispatch(fetchWeather(city, units))
    })
  }, [])

  useEffect(() => {
    cities.forEach((city) => {
      dispatch(fetchWeather(city, units))
    })
  }, [units])

  const changeBackground = (city) => {
    let image = ''

    if (city === 'London') {
      image = 'cardLondon'
    }
    if (city === 'Berlin') {
      image = 'cardBerlin'
    }
    if (city === 'Rome') {
      image = 'cardRome'
    }
    if (city === 'New York') {
      image = 'cardNewYork'
    }
    return image
  }

  return (
    <Row className="w-100">
      {weatherData.map((data, index) => (
        <Col lg={3}>
          <div
            key={index}
            className="container-fluid px-1 px-md-4 py-5 mx-auto"
          >
            <div className="row d-flex justify-content-center px-3">
              <div className={changeBackground(data.name)}>
                <h2 className="ml-auto mr-4 mt-3 mb-0 text-right">
                  {data.name}
                </h2>
                <p className="ml-auto mr-4 mb-0 med-font text-right">
                  {data.weather[0].main}
                </p>
                <h1 className="ml-auto mr-4 large-font text-right">
                  {Math.round(data.main.temp * 10) / 10}
                  <small>{suffix}</small>
                </h1>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}
export default WeatherCard
