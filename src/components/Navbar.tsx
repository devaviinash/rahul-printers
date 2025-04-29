import React, { useState, useEffect } from "react";
import { Menu, Phone, X } from "lucide-react";
import { scrollToSection } from "../utils/smoothScroll";
import { EasterEggs } from "../utils/easterEggs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const observerOptions = {
      root: null, // Observe the viewport
      threshold: 0.5, // Section should be 50% in view to be considered active
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Set the active section when the section is in view
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/50 backdrop-blur-sm z-50 shadow-sm rounded-3xl mt-3 mr-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="mr-2 relative inline-block">
              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-full bg-yellow-100/20 blur-sm"></div>
              {/* Logo */}
              <img
                src="/images/logo-1.png"
                className="relative w-10 transition-transform hover:scale-105 cursor-pointer"
                onClick={() => EasterEggs.handlePrinterClick()}
                alt="Logo"
              />
            </div>

            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 text-transparent bg-clip-text">
              Rahul Printers
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {[
                ["home", "Home", "red"],
                ["services", "Services", "orange"],
                ["timeline", "Timeline", "yellow"],
                ["features", "Features", "green"],
                ["testimonials", "Testimonials", "blue"],
                ["contact", "Contact", "indigo"],
              ].map(([id, label, color]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`px-3 py-2 transition-colors ${
                    activeSection === id
                      ? `text-${color}-500`
                      : "hover:text-" + color + "-500"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href="tel:+9822131089"
                className="bg-violet-600 text-white px-4 py-2 rounded-md flex items-center transition-all hover:bg-violet-700 hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {[
            ["home", "Home", "red"],
            ["services", "Services", "orange"],
            ["timeline", "Timeline", "yellow"],
            ["features", "Features", "green"],
            ["testimonials", "Testimonials", "blue"],
            ["contact", "Contact", "indigo"],
          ].map(([id, label, color]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`block px-3 py-2 transition-colors ${
                activeSection === id
                  ? `text-${color}-500`
                  : "hover:text-" + color + "-500"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+9822131089"
            className="w-full bg-violet-600 text-white px-4 py-2 rounded-md flex items-center justify-center transition-all hover:bg-violet-700 active:scale-95"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
}
