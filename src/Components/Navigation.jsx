import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'

const Navigation = () => {
  const dispatch = useDispatch()
  const units = useSelector((state) => state.units)
  const suffix = useSelector((state) => state.suffix)

  const updateUnits = (value) => {
    if (value === 'Metric') {
      dispatch({
        type: 'UPDATE_SUFFIX',
        payload: 'c',
      })
    } else {
      dispatch({
        type: 'UPDATE_SUFFIX',
        payload: 'f',
      })
    }

    dispatch({
      type: 'UPDATE_UNITS',
      payload: value,
    })

    console.log(value)
  }

  return (
    <Navbar bg="primary" variant="dark">
      <img
        src="https://cdn.pixabay.com/photo/2015/11/07/21/38/umbrella-1032758_960_720.png"
        className="nav-icon mr-3"
      ></img>
      <Navbar.Brand href="#home">What's the Weather?</Navbar.Brand>
      <Nav className="ml-auto mr-2"></Nav>
      <Dropdown onSelect={(event, e) => updateUnits(event, e.target.value)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Temparature Units: {units}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Metric">Celsius</Dropdown.Item>
          <Dropdown.Item eventKey="Imperial">Farenheit</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  )
}

export default Navigation
