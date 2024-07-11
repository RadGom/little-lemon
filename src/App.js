import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Especiales from './Specials';
import Testimonios from './Testimonials';
import Destacado from './Highlight';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especiales" element={<Especiales />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/destacado" element={<Destacado />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
