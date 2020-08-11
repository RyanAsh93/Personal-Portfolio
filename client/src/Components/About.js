import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Me from '../Images/Me.jpg'
import uofu from '../Images/uofu.png'
import devlogo from '../Images/devlogo.jpeg'

function About() {
  return (
    <div style={styles.imgWrapper1} >
    <div style={styles.imgWrapper} >
      <h1 style={styles.head} >About Me</h1>
       {/* <img style={styles.background} src={ uofu } /> */}
      <Container>
  <Row style={styles.centerPic} >
    {/* <Col xs={6} md={4}> */}
    <img style={styles.editMe} src={ Me } />
      {/* <Image src="../Images/Me.jpg/171x180" rounded /> */}
    {/* </Col> */}
    </Row>
    </Container>
    <br/>
    <p style={styles.para} >Full Stack graduate from DevPoint Labs of University of Utah. Completed 11 Week course covering
      various front end to back end frameworks, along with supporting tools. Quick learner and strong
      network of senior engineers which fed my desire to excel in this space. Seeking a challenging and 
      growing opportunity in the software engineering world.
    </p>
    </div>
    </div>
  )
}

export default About;

const styles = {
  head: {
    textAlign: 'center',
    textShadow: '2px 2px grey',
  },
  editMe: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    overflow: 'hidden',
    border: '3px solid',
    borderColor: 'black',
  },
  centerPic: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  para: {
    fontSize: '1.5em',
  },
  background: {
    height: 'auto',
    maxWidth: '100%',
  },
  imgWrapper: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    backgroundImage: `url(${uofu})`,
    backgroundRepeat: 'no-repeat',
  },
  imgWrapper1: {
    display: 'block',
    backgroundPosition: '800px 100px',
    height: 'auto',
    maxWidth: '100%',
    backgroundImage: `url(${devlogo})`,
    backgroundRepeat: 'no-repeat',
    right: '50px',
  }
}
