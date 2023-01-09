import React from 'react' ;

import { AboutUs, Counselor, Findus, Gallery, Header, Intro, Menu } from './container' ;
import { Navbar } from './components' ;
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Counselor />
      <Intro />
      <Gallery />
      <Findus />
      
    </div>
  ) ;
}

export default App ;
