const startingState = {
  weatherSearch: {
    content: [],
  },
  weatherDefault: {
    content: [],
  },
}

const mainReducer = (state = startingState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_WEATHER':
      return {
        ...state,
        weatherSearch: {
          ...state.weatherSearch,
          content: [...state.weatherSearch.content, action.payload],
        },
      }

    case 'SET_WEATHER_DEFAULT':
      return {
        ...state,
        weatherDefault: {
          ...state.weatherDefault,
          content: [...state.weatherDefault.content, action.payload],
        },
      }

    default:
      return state
  }
}

export default mainReducer
