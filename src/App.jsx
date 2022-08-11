import React from 'react';
import './App.css';

import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import Projects from './pages/projects';

function App() {
  return (
    <div className='application'>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
