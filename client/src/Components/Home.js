import React from 'react'
import Background from '../Images/space.jpg'

function Home() {
  return (
    <div>
       {/* <img style={styles.backgrounds} src={ Background } /> */}
    <div style={styles.backFix} >
      <h1 style={styles.head} >Personal Profolio</h1>
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
    textAlign: 'center',
    textShadow: '2px 2px grey',
  },
  backgrounds: {
    backgroundColor: '#f8f8ff',
    textAlign: 'center',
    position: 'fixed',
    height: '60%',
    minWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    left: '1px',
  },
  backFix: {
    display: 'inline-block',
    overflow: 'hidden',
    // position: 'cover',
    // backgroundColor: 'black',
  }
}
