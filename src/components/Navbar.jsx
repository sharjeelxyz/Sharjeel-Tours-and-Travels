import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPhone, HiBars3, HiXMark } from "react-icons/hi2";
import { GrCar } from "react-icons/gr";

const Navbar = ({ onBookNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Routes", href: "#routes" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2"
            >
              <div
                className={`p-2 rounded-xl ${isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"}`}
              >
                <GrCar
                  className={`w-6 h-6 ${isScrolled ? "text-accent" : "text-white"}`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-bold tracking-tight ${isScrolled ? "text-primary" : "text-white"}`}
                >
                  Sharjeel
                </span>
                <span
                  className={`text-xs font-medium -mt-1 ${isScrolled ? "text-gray-500" : "text-white/80"}`}
                >
                  Tours & Travels
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isScrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919696832321"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isScrolled
                    ? "text-primary hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <HiPhone className="w-4 h-4" />
                9696832321
              </a>
              <button
                onClick={onBookNow}
                className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-primary" : "text-white"}`}
            >
              {isMobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium text-gray-800 py-3 border-b border-gray-100"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onBookNow();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 w-full py-4 bg-accent text-white font-bold rounded-xl text-lg"
              >
                Book Now
              </button>
              <a
                href="tel:+919696832321"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl text-lg text-center flex items-center justify-center gap-2"
              >
                <HiPhone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
