import React from 'react'

function Projects() {
  return (
    <div>
      <h1 style={styles.head} >Projects</h1>
      <h4>Clients Website</h4>
      <a target="_blank" href="https://lakepointinsurance.mybluemix.net">LakePoint Insurance Agency</a>
      <p>Building a landing page for a local insurance company.</p>
      <hr/>
      <h4>Personal Project</h4>
      <a target="_blank" href="https://hatchwaysassessment.mybluemix.net">Student List</a>
      <p>Built an app using an API to filter, and display students infomation.</p>
      <hr/>
      <h4>Final DevPoint Labs Group Project</h4>
      <a target="_blank" href="https://digital--glovebox.herokuapp.com">Digital Glove Box</a>
      <p>I worked on the Car Profile page, Edit Vehicle Form, and landing page.</p>
      <hr/>
      <h4>Personal Project</h4>
      <a target="_blank" href="https://pocket-shopping-list.herokuapp.com">Shopping List App</a>
      <p>Built an app where you can add, delete, and cross off items for your shopping list.</p>
      <hr/>
      <h4>Personal Project</h4>
      <a target="_blank" href="https://traise-dev.mybluemix.net">Traise App</a>
      <p>Personal project with my brother, Started as a template but have been adding and removing multiple features.</p>
    </div> 
  )
}

export default Projects;

const styles = {
  head: {
    textAlign: 'center',
    textShadow: '2px 2px grey',
  }
}