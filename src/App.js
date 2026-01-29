import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
