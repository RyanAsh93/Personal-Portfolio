import React from 'react'

function Projects() {
  return (
    <div>
      <h1 style={styles.head} >Projects</h1>
      <h4>Final DevPoint Labs Group Project</h4>
      <a target="_blank" href="https://digital--glovebox.herokuapp.com">Digital Glove Box</a>
      <p>I worked on the Car Profile page, and Edit Vehicle Form</p>
      <hr/>
      <h4>Personal Project</h4>
      <a target="_blank" href="https://pocket-shopping-list.herokuapp.com">Shopping List App</a>
      <p>Built a simple app where you can add items for your shopping needs</p>
      <hr/>
    </div>
  )
}

export default Projects;

const styles = {
  head: {
    textAlign: 'center',
  }
}