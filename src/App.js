import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
// import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden h-[2750px]'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Work />
      {/* <Contact /> */}
      <div className='h-max'></div>
    </div>
  );
};

export default App;
