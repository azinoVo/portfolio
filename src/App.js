import React from 'react';
import './App.css';
// import Nav from './components/Navigation/Nav'
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <Nav /> */}
      <TechStack />
      <Projects />
      <footer>Copyright 2019 Nguyen Vo</footer>
    </div>
  );
}

export default App;
