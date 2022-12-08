const startingState = {
  weatherSearch: {
    content: [],
  },
  weatherDefault: {
    content: [],
  },
  units: 'Metric',
  suffix: 'c',
}

const mainReducer = (state = startingState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_WEATHER':
      return {
        ...state,
        weatherSearch: {
          content: [...state.weatherSearch.content, action.payload],
        },
      }
    case 'SET_WEATHER_DEFAULT':
      return {
        ...state,
        weatherDefault: {
          content: [
            action.payload,
            ...state.weatherDefault.content.slice(0, 3),
          ],
        },
      }

    case 'UPDATE_UNITS':
      return {
        ...state,
        units: action.payload,
      }

    case 'UPDATE_SUFFIX':
      return {
        ...state,
        suffix: action.payload,
      }

    default:
      return state
  }
}

export default mainReducer
