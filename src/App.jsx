// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext"; // Import the ThemeProvider

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider> {/* Wrap the app in ThemeProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
