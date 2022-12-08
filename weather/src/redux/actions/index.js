import { useSelector } from 'react-redux'

export const fetchWeather = (city, units) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
          city +
          '&appid=8c1b60ad01126a2d8883709df2ba5cdc&u&&units=' +
          units,
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
