import React from 'react'
// import Background from '../Images/space.jpg'
import Background from '../Images/ship.jpg'

function Home() {
  return (
    <div style={styles.backColor}>
      <div style={styles.editImg}>
       {/*<img style={styles.editImg} src={ Background } />*/}
       </div>
    <div style={styles.head} >
      <h1>Personal Profolio</h1>
      <p>Hello, my name is Ryan Ashworth I'm a newly graduate from a full-stack 
        web development bootcamp course through DevPoint Labs. I'm hard driven 
        to continuously grow, learn, and expertise in website development, and programming. 
      </p>
      </div>
    </div>
  );
  }

export default Home;

const styles = {
  head: {
    //position: 'absolute',
    left: '0',
    right: '0',
    textAlign: 'center',
    color: 'black',
    // textShadow: '2px 2px grey',
    margin: '0',
  },
  editImg: {

    // backgroundColor: '#f8f8ff',
    // textAlign: 'center',
    //position: 'absolute',
    //height: '50%',
    //left: '0',
    //right: '0',
    //minWidth: '100%',
    //top: '0',
    height: '350px',
    background: `url(${Background})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
  },
  backColor: {
    position: 'fixed',
    backgroundColor: 'whitesmoke',
    width: '100vw',
    height: '100vh',
    left: '0',
    right: '0',
    // top: '50px',
  },
}
