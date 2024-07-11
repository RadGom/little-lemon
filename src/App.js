import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Especiales from './Specials';
import Testimonios from './Testimonials';
import Destacado from './Highlight';
import Footer from './Footer';
import BookingForm from './BookingForm';


const initializeTimes = () => {
  return [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ];
};



const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especiales" element={<Especiales />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/destacado" element={<Destacado />} />
          <Route path="/reservar" element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
