import React from 'react'

function Contact() {
  return (
    <div style={styles.head}  >
      <br/>
      <h1>Contact</h1>
      <hr/>
      <h4>Email: RyanAshworth93@yahoo.com</h4>
      <hr/>
      <h4>GitHub:<a target="_blank" href="https://github.com/RyanAsh93">
        https://github.com/RyanAsh93</a></h4>
        <hr/>
      <h4>linkedin:<a target="_blank" href="https://www.linkedin.com/in/ryansashworth/">
        www.linkedin.com/in/ryansashworth</a></h4>
        <hr/>
    </div>
  )
}

export default Contact;

const styles = {
  head: {
    textAlign: 'center',
  }
}
