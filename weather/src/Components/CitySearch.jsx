import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { format, compareAsc } from 'date-fns'

const CitySearch = () => {
  const weatherData = useSelector(
    (state) =>
      state.weatherSearch.content[state.weatherSearch.content.length - 1],
  )

  const changeBackground = (weather) => {
    let image = ''

    if (weather === 'Mist') {
      image = 'd-flex carouselContainerMist'
    }
    if (weather === 'Clouds') {
      image = 'd-flex carouselContainerSun'
    }
    if (weather === 'Clear') {
      image = 'd-flex carouselContainerClear'
    }
    if (weather === 'Rain') {
      image = 'd-flex carouselContainerRain'
    }
    if (weather === 'Snow') {
      image = 'd-flex carouselContainerSnow'
    }
    return image
  }

  return (
    <div className="d-flex w-100 justify-content-center">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item className="carouselImage">
          <Row>
            <div className={changeBackground(weatherData.weather[0].main)}>
              <Col lg={10} className="mainImage"></Col>
            </div>
            <Col lg={2} className="red">
              <div className="contentContainer">
                <h1 className="cityName mb-3 pt-5">{weatherData.name}</h1>
                <h1 className="cityName">
                  {Math.round(weatherData.main.temp * 10) / 10}c
                </h1>
                <h6 className="mt-5">
                  High: {Math.round(weatherData.main.temp_max * 10) / 10}c
                </h6>
                <h6>Low: {Math.round(weatherData.main.temp_min * 10) / 10}c</h6>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default CitySearch
