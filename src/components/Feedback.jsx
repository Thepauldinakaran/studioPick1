import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "We are beyond thankful for how our special day was captured, and we will cherish our photographs forever.",
    name: "Couple1 & Couple1",
  },
  {
    text: "A truly magical experience! The pictures turned out even better than we imagined.",
    name: "Couple2 & Couple2",
  },
  {
    text: "Captured every special moment beautifully! Highly recommend their service.",
    name: "Couple3 & Couple3",
  },
  {
    text: "Absolutely stunning photos! We couldn't be happier.",
    name: "Couple4 & Couple4",
  },
  {
    text: "Memories we'll cherish forever. Thank you for capturing our special moments!",
    name: "Couple5 & Couple5",
  },
];

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-[700px] flex items-center justify-center bg-fixed bg-cover bg-center px-4 overflow-hidden"
      style={{ backgroundImage: "url('/images/bg1.jpg')" }}
    >
      {/* Background Overlay for Soft Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#D4AF37] bg-opacity-70"></div>

      {/* Content */}
      <div className="relative bg-white bg-opacity-20 p-6 sm:p-8 md:p-10 lg:p-11 w-full max-w-lg shadow-lg backdrop-blur-md overflow-hidden">
        <div className="border-4 border-[#F6C453] p-6 sm:p-10 md:p-12 lg:p-16 relative h-[200px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].text}
              initial={{ x: "100%", opacity: 0, position: "absolute" }}
              animate={{ x: "0%", opacity: 1, position: "absolute" }}
              exit={{ x: "-100%", opacity: 0, position: "absolute" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full flex flex-col items-center justify-center text-center absolute gap-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-[#FFFFFF] italic w-full">
                “{testimonials[currentIndex].text}”
              </p>
              <div className="text-[#FFD700] font-semibold text-sm sm:text-base md:text-lg w-full">
                — {testimonials[currentIndex].name}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
