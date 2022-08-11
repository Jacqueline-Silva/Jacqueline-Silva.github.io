import React from 'react';
import './App.css';

import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import Contacts from './pages/contacts';
import Projects from './pages/projects';

function App() {
  return (
    <div className='application'>
      <Header />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
