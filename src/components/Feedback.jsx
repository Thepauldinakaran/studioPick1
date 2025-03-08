import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "We are beyond thankful for how our special day was captured, and we will cherish our photographs forever.",
    name: "Couple1 & Couple1",
    image: "images/c1.jpg",
    rating: 5,
  },
  {
    text: "A truly magical experience! The pictures turned out even better than we imagined.",
    name: "Couple2 & Couple2",
    image: "images/c2.jpg",
    rating: 5,
  },
  {
    text: "Captured every special moment beautifully! Highly recommend their service.",
    name: "Couple3 & Couple3",
    image: "images/c3.jpg",
    rating: 4.5,
  },
  {
    text: "Absolutely stunning photos! We couldn't be happier.",
    name: "Couple4 & Couple4",
    image: "images/c4.jpg",
    rating: 5,
  },
  {
    text: "Memories we'll cherish forever. Thank you for capturing our special moments!",
    name: "Couple5 & Couple5",
    image: "images/c5.jpg",
    rating: 4.8,
  },
];

const Feedback = ({ autoSlideInterval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setDirection(1); // Auto-slide always moves right
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isHovered, autoSlideInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Navigation handlers
  const handleNext = () => {
    setDirection(1); // Move right
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1); // Move left
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%", // Enter from the right or left
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%", // Exit to the opposite side
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative max-w-[100vw] overflow-x:hidden min-h-[750px] flex flex-col items-center justify-center bg-fixed bg-cover bg-center px-4 overflow-hidden"
      style={{ backgroundImage: "url('/images/bg1.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3E0] via-[#E5D4C0] to-[#C8A888] bg-opacity-80"></div>

      {/* Elegant Heading */}
      <h2 className="relative text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-heading font-semibold text-center text-[#5C3D2E] mb-12 px-6">
        "A moment lasts for seconds,
        <br className="hidden sm:block" />
        but a memory lasts forever."
      </h2>

      {/* Carousel Content */}
      <div
        className="relative h-[500px] bg-white bg-opacity-20 p-6 sm:p-8 md:p-10 lg:p-11 w-full max-w-lg shadow-lg backdrop-blur-md overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="border-4 h-[400px] border-[#C8A888] p-6 sm:p-10 md:p-12 lg:p-16 relative flex flex-col items-center justify-center text-center gap-6 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[currentIndex].text}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-[350px] flex flex-col items-center justify-center text-center gap-4"
            >
              {/* Client Image */}
              <motion.img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-md border-2 border-[#D4A373] object-cover"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                onError={(e) => {
                  e.target.src = "images/fallback.jpg"; // Fallback image
                }}
              />

              {/* Star Ratings */}
              <div className="flex justify-center gap-1 text-[#D4A373]">
                {"★".repeat(Math.floor(testimonials[currentIndex].rating))}
                {testimonials[currentIndex].rating % 1 !== 0 && "☆"}
              </div>

              {/* Feedback Text */}
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-[#5C3D2E] italic w-full">
                “{testimonials[currentIndex].text}”
              </p>

              {/* Client Name */}
              <div className="text-[#D4A373] font-semibold text-sm sm:text-base md:text-lg w-full">
                — {testimonials[currentIndex].name}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-6 text-[#D4A373] text-4xl top-1/2 transform -translate-y-1/2"
          onClick={handleNext}
          aria-label="Previous testimonial"
        >
          &#8249;
        </button>
        <button
          className="absolute right-6 text-[#D4A373] text-4xl top-1/2 transform -translate-y-1/2"
          onClick={handlePrev}
          aria-label="Next testimonial"
        >
          &#8250;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 md:bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#D4A373]"
                  : "bg-[#C8A888] opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
