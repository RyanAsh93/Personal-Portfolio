import React from 'react'
import ContactImage from '../Images/contact.jpg'

function Contact() {
  return (
    <div style={styles.centering} >
      <br/>
      <h1 style={styles.head}  >Contact</h1>
      <hr/>
      <h4>Email: ryanashworth93@yahoo.com</h4>
      <hr/>
      <h4>GitHub: <a target="_blank" href="https://github.com/RyanAsh93">
        https://github.com/RyanAsh93</a></h4>
        <hr/>
      <h4>Linkedin: <a target="_blank" href="https://www.linkedin.com/in/ryansashworth/">
        www.linkedin.com/in/ryansashworth</a></h4>
        <hr/>
        <img src={ContactImage} />
    </div>
  )
}

export default Contact;

const styles = {
  head: {
    textAlign: 'center',
    textShadow: '2px 2px dodgerblue',
  },
  centering: {
    textAlign: 'center',
  }
}
