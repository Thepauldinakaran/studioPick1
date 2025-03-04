import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./About";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (id) => {
    if (id === "#about") {
      setShowAbout(true);
      setMenuOpen(false);
    } else {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-white/50 backdrop-blur-xl transition-all duration-300 
        px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36 2xl:px-44 
        ${
          isScrolled
            ? "py-3 md:py-5 text-sm md:text-base"
            : "py-6 md:py-5 text-lg md:text-lg"
        }`}
      >
        <div className="hidden md:flex w-full items-center justify-between">
          <div className="flex space-x-5 md:space-x-7 lg:space-x-10">
            {["HOME", "BLOG", "STORIES"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${item.toLowerCase()}`);
                }}
                className="hover:text-gray-500 border-b-2 border-transparent hover:border-gray-900 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-wide text-gray-900">
            BLUME
            <div className="text-xs md:text-sm italic font-light">
              photography
            </div>
          </div>

          <div className="flex space-x-5 md:space-x-7 lg:space-x-10">
            {["ABOUT", "GALLERY", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${item.toLowerCase()}`);
                }}
                className="hover:text-gray-500 border-b-2 border-transparent hover:border-gray-900 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="text-xl sm:text-2xl font-serif tracking-wide text-gray-900">
            BLUME
            <div className="text-xs sm:text-sm italic font-light">
              photography
            </div>
          </div>
          <motion.div
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex flex-col items-center space-y-1 p-2"
          >
            <div
              className={`w-6 h-1 bg-gray-900 rounded transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-gray-900 rounded transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-gray-900 rounded transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </motion.div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              className="absolute left-0 top-full w-full bg-white shadow-md md:hidden flex flex-col p-6 space-y-4 items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "linear" }}
            >
              {["HOME", "BLOG", "STORIES", "ABOUT", "GALLERY", "CONTACT"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(`#${item.toLowerCase()}`);
                    }}
                    className="hover:text-gray-500 text-lg"
                  >
                    {item}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Bottom Line that Fades on Scroll */}
        <motion.div
          className="absolute bottom-0 left-6 sm:left-10 md:left-16 lg:left-28 xl:left-36 2xl:left-44 
        right-6 sm:right-10 md:right-16 lg:right-28 xl:right-36 2xl:right-44 h-[1px] bg-gray-400"
          initial={{ opacity: 1 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </nav>

      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-5 right-5 text-2xl"
            >
              ✕
            </button>
            <About />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
