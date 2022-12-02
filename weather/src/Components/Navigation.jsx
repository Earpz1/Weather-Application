import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap'

const Navigation = () => {
  const fns = require('date-fns')

  const time = fns.format(new Date(), 'dd-MM-yyyy HH:mm:ss')
  return (
    <Navbar bg="primary" variant="dark">
      <img
        src="https://cdn.pixabay.com/photo/2015/11/07/21/38/umbrella-1032758_960_720.png"
        className="nav-icon mr-3"
      ></img>
      <Navbar.Brand href="#home">What's the Weather?</Navbar.Brand>
      <Nav className="ml-auto mr-2">
        <h2>{time} (GMT)</h2>
      </Nav>
    </Navbar>
  )
}

export default Navigation
