import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Me from '../Images/Me.jpg'
import uofu from '../Images/uofu.png'
import devlogo from '../Images/devlogo.jpeg'

function About() {
  return (
    <div>
    <Container>
      <Row style={styles.editRow} >
    <Col> <Image src={uofu} fluid /> </Col>
    {/* <Col> <Image style={styles.editMe}/> </Col> */}
    <Col> <Image src={Me} roundedCircle fluid style={styles.editMe} /> </Col>
    <Col> <Image src={devlogo} fluid style={styles.imgWrapper1} /> </Col>
    </Row>
    </Container>
      <h1 style={styles.head} >About Me</h1>
    <br/>
    <p style={styles.para} >Full Stack graduate from DevPoint Labs of University of Utah. Completed 11 Week course covering
      various front end to back end frameworks, along with supporting tools. Quick learner and strong
      network of senior engineers which fed my desire to excel in this space. Seeking a challenging and 
      growing opportunity in the software engineering world.
    </p>
    </div>
  )
}

// try putting imgs. in COL -- Bootstrap css/grid

export default About;

const styles = {
  editRow: {
    alignItems: 'center',
  },
  head: {
    textAlign: 'center',
    textShadow: '2px 2px grey',
  },
  editMe: {
    width: '300px',
    height: '300px',
    borderRadius: 300 / 2,
    overflow: 'hidden',
    border: '3px solid',
    borderColor: 'black',
    backgroundImage: `url(${Me})`,
  },
  para: {
    fontSize: '1.5em',
  },
  imgWrapper: {
    // display: 'block',
    // height: 'auto',
    // maxWidth: '100%',
    height: '400px',
    width: '400px',
    backgroundImage: `url(${uofu})`,
    mixBlendMode: 'multiply',
    backgroundRepeat: 'no-repeat',
  },
  imgWrapper1: {
    // display: 'block',
    // backgroundPosition: '800px 100px',
    // height: 'auto',
    // maxWidth: '100%',
    // height: '200px',
    // width: '200px',
    // backgroundImage: `url(${devlogo})`,
    mixBlendMode: 'multiply',
    // backgroundRepeat: 'no-repeat',
    // right: '45px',
  }
}
//vertical align 