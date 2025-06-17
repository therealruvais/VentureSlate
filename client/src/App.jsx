import React from 'react'
import {  Routes, Route, useLocation } from "react-router-dom";
import ContactForm from './pages/contactForm'
import Home from './pages/Home'
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const location = useLocation();
const hiddenPaths = ['/', '/terms']; // Add more paths here as needed
const hideNavbar = hiddenPaths.includes(location.pathname);
const hideFooter =  hiddenPaths.includes(location.pathname);

  return (
    <div>
        {!hideNavbar && <Navbar />}
          <Routes>
            <Route
              path="/"
              element={<ContactForm />}
            />
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/terms"
              element={<Terms />}
            />
          </Routes>
          {!hideFooter && <Footer />}
     
    </div>
  );
};

export default App