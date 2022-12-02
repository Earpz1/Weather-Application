import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'

const GetWeather = ({ Query }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchWeather(Query)
  })

  const fetchWeather = async (city) => {
    try {
      let response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&appid=8c1b60ad01126a2d8883709df2ba5cdc&u&units=metric',
      )
      if (response.ok) {
        let weatherData = await response.json()
        dispatch({
          type: 'SET_WEATHER_DEFAULT',
          payload: weatherData,
        })
      }
    } catch (error) {}
  }
}

export default GetWeather
