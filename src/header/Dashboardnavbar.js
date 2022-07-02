import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function Dashboardnavbar() {
  
  return (
    <div >
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to='/' className='text' onClick={()=>sessionStorage.clear()}>Logout</Link>
    </Nav>
    </Container>
  </Navbar>
</>
    </div>
  )
}