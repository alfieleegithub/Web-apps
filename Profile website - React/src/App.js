import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => (
          <About />
        )} />
        <Route exact path="/project" render={() => (
          <Project />
        )} />
        <Route exact path="/contact" render={() => (
          <Contact />
        )} />
        <Route render={() => (
          <NotFound />
        )} />
      </Switch>
    </div>
  );
}

export default App;
