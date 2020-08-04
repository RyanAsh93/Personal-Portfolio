import React from 'react'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <Nav variant="tabs"  defaultActiveKey="/" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/About">About</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Projects">Projects</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/Contact">Contact</Nav.Link>
  </Nav.Item>
  </Nav>
  )
  }

export default NavBar;
