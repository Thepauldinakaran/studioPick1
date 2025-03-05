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
        className={`fixed top-0 w-full z-50 bg-[#4A148C]/80 backdrop-blur-xl text-white transition-all duration-300 
        px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36 2xl:px-44 
        ${
          isScrolled
            ? "py-3 md:py-5 text-sm md:text-base shadow-md"
            : "py-6 md:py-5 text-lg md:text-lg"
        }`}
      >
        <div className="hidden md:flex w-full items-center justify-between ">
          <div className="flex space-x-5 md:space-x-7 lg:space-x-10">
            {["HOME", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${item.toLowerCase()}`);
                }}
                className="hover:text-[#D4AF37] border-b-2 border-transparent hover:border-[#D4AF37] transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className=" flex flex-col gap-1 items-center ">
            {/* Logo Image */}
            <img
              src="images/03.png"
              alt="logo"
              className="h-20 md:h-10 lg:h-[50px] w-auto"
            />

            {/* Logo Name Image */}

            <img
              src="images/02.png"
              alt="logoname"
              className="h-9 md:h-4 lg:h-[15px] w-auto"
            />
          </div>

          <div className="flex space-x-5 md:space-x-7 lg:space-x-10">
            {["ABOUT", "GALLERY"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(`#${item.toLowerCase()}`);
                }}
                className="hover:text-[#D4AF37] border-b-2 border-transparent hover:border-[#D4AF37] transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center w-full">
          <div className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-wide text-white flex flex-col items-center">
            {/* Logo Image */}
            <img
              src="images/03.png"
              alt="logo"
              className="h-[25px] md:h-[20px] lg:h-[50px] w-auto"
            />

            {/* Logo Name Image */}
            <div className="text-xs md:text-sm italic font-light text-[#FFD700] mt-1">
              <img
                src="images/02.png"
                alt="logoname"
                className="h-[8px] md:h-[6px] lg:h-[15px] w-auto"
              />
            </div>
          </div>
          <motion.div
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex flex-col items-center space-y-1 p-2"
          >
            <div
              className={`w-6 h-1 bg-white rounded transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white rounded transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white rounded transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </motion.div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              className="absolute left-0 top-full w-full  bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#D4AF37]  shadow-md md:hidden flex flex-col p-6 space-y-4 items-center"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -1 }}
              transition={{ duration: 0.4, ease: "linear" }}
            >
              {["HOME", "ABOUT", "GALLERY", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(`#${item.toLowerCase()}`);
                  }}
                  className="hover:text-[#FFD700] text-lg text-white"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute bottom-0 left-6 sm:left-10 md:left-16 lg:left-28 xl:left-36 2xl:left-44 
        right-6 sm:right-10 md:right-16 lg:right-28 xl:right-36 2xl:right-44 h-[1px] bg-[#FFD700]/60"
          initial={{ opacity: 1 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </nav>

      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[#3D1D5A] z-50 overflow-auto p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-5 right-5 text-3xl text-[#FFD700] hover:text-white"
            >
              &times;
            </button>
            <About />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
