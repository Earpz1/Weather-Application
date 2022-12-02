import { useState } from 'react'
import { useSelector } from 'react-redux'

const WeatherCard = (props) => {
  let currentTime = new Date()
  let time = currentTime.getHours() + ':' + currentTime.getMinutes

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

  const weatherData = useSelector((state) => state.weatherDefault.content)

  return weatherData.map((data) => (
    <div className="container-fluid px-1 px-md-4 py-5 mx-auto">
      <div className="row d-flex justify-content-center px-3">
        <div className={changeBackground(data.name)}>
          <h2 className="ml-auto mr-4 mt-3 mb-0 text-right">{data.name}</h2>
          <p className="ml-auto mr-4 mb-0 med-font text-right">
            {data.weather[0].main}
          </p>
          <h1 className="ml-auto mr-4 large-font text-right">
            {Math.round(data.main.temp * 10) / 10}
            <small>c</small>
          </h1>
        </div>
      </div>
    </div>
  ))
}
export default WeatherCard
