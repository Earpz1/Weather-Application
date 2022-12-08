import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchWeather } from '../redux/actions'

const GetWeather = ({ query }) => {
  const dispatch = useDispatch()

  const units = useSelector((state) => state.units.content[0])
  const unitsChanged = useSelector((state) => state.units.unitsChanged)
}

export default GetWeather
