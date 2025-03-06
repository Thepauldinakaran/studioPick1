import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import LoveStories from "./components/LoveStories";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page with all sections////////// */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Service />
              <LoveStories />
              <Feedback />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer inside Routes //////////////////////////// */}
      <Footer />
    </Router>
  );
}

export default App;
