import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <NavBar />
    <Container>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Projects' component={Projects} />
      <Route exact path='/Contact' component={Contact} />
      </Switch>
    </Container>
    </>
  );
}

export default App;
