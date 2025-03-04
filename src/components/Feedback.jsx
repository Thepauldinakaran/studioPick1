import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "We are beyond thankful for how our special day was captured, and we will cherish our photographs forever.",
    name: "STACY & THOMAS",
  },
  {
    text: "A truly magical experience! The pictures turned out even better than we imagined.",
    name: "JAMES & LUCY",
  },
  {
    text: "Captured every special moment beautifully! Highly recommend their service.",
    name: "DAVID & EMILY",
  },
  {
    text: "Absolutely stunning photos! We couldn't be happier.",
    name: "OLIVER & SOPHIA",
  },
  {
    text: "Memories we'll cherish forever. Thank you for capturing our special moments!",
    name: "MIA & NOAH",
  },
];

const FeedbackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full min-h-[700px] flex items-center justify-center bg-fixed bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/bg1.jpg')" }}
    >
      <div className="bg-white bg-opacity-40 p-6 sm:p-8 md:p-10 lg:p-11 w-full max-w-lg shadow-lg overflow-hidden">
        <div className="border-4 border-[#cfb7b7] p-6 sm:p-10 md:p-12 lg:p-16 relative h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].text}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute w-full text-center"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 italic">
                “{testimonials[currentIndex].text}”
              </p>
              <div className="mt-4 text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
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
