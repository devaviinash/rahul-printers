import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import QRCode from "./components/QRCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { EasterEggs } from "./utils/easterEggs";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize easter eggs
    EasterEggs.init();

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <Services />
      <Timeline />
      <Features />
      <Testimonials />
      <QRCode />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
