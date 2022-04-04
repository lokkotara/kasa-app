import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Accomodation" element={<Accomodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
