// Librairies
import React from "react";
// Components
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Home/Hero.jsx";
import Security from "./components/Home/Security.jsx";
import Newsletter from "./components/Home/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Home/Cards.jsx";

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <Hero />
      <Security />
      <Newsletter />
      <Cards />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
