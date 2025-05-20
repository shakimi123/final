import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" className="hero">
        <h2>Welcome to Delicious Eats</h2>
        <p>Your favorite spot for amazing food and great ambiance.</p>
      </section>
      <Menu />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
