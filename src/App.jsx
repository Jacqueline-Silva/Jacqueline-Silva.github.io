import React from 'react';
import './App.css';

import About from './components/about/index.jsx';
import Footer from './components/footer/index.jsx';
import Header from './components/header/index.jsx';
import Projects from './pages/projects/index.jsx';

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
