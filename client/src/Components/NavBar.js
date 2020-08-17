import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar style={styles.navBack}>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/About">About</Nav.Link>
    <Nav.Link href="/Projects">Projects</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
  </Navbar>
  )
  }

export default NavBar;

const styles = {
  navBack: {
    // boxShadow: '1px, 2px, 4px grey',
    background: '#dfe6e9',
    // textColor: 'green',
  }
}
// variant='dark' bg='dark' --  this is for a dark navbar..put in Navbar 