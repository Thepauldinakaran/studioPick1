import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const images = ["images/H2.JPG", "images/H1.png"];

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextImage(),
    onSwipedRight: () => handlePrevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Move to Next Image (Swipe Left)
  const handleNextImage = () => {
    setDirection(1); // Right-to-left animation
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Move to Previous Image (Swipe Right)
  const handlePrevImage = () => {
    setDirection(-1); // Left-to-right animation
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Animation Variants (Left & Right Swipe Effects)
  const imageVariants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="relative w-full min-h-screen pb-0 mb-0 overflow-hidden">
      <motion.div
        // initial={{ y: 50, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        id="home"
        className="flex w-full min-h-screen flex-col h-full p-8 gap-4 
      bg-gradient-to-r from-[#FAF3E0] via-[#E5D4C0] to-[#C8A888] 
      bg-cover bg-no-repeat shadow-[0px_0px_30px_5px_rgba(200,168,136,0.3)]
      sm:p-10 md:p-14 lg:flex-row lg:p-10 lg:pt-40 xl:p-32 xl:pt-52 2xl:p-44"
      >
        {/* Image Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[580px] xl:h-[660px] 2xl:h-[650px] 
        bg-[#F5E6D0] bg-opacity-90 rounded-lg 
        order-1 lg:order-2 
        mt-20 sm:mt-24 md:mt-24 lg:mt-0 xl:mt-0 2xl:mt-0"
        >
          {/* Large Screen - Two Images Centered */}
          <motion.div className="hidden sm:flex justify-center items-center gap-5">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="w-[40%] h-[80%] flex justify-center items-center overflow-hidden rounded-lg 
            border-2 bg-gradient-to-b from-[#C8A888] via-[#E5D4C0] to-[#F5E6D0] 
            shadow-[0_0_20px_#C8A888]"
            >
              <img
                src="images/H2.JPG"
                alt="Wedding Photography"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="w-[40%] h-[80%] flex justify-center items-center overflow-hidden rounded-lg 
            border-2 bg-gradient-to-b from-[#C8A888] via-[#E5D4C0] to-[#F5E6D0] 
            shadow-[0_0_20px_#C8A888]"
            >
              <img
                src="images/H1.png"
                alt="Wedding Moment"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Mobile - Swipeable Smooth Slider with Correct Direction */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="sm:hidden w-[90%] h-[80%] flex justify-center items-center overflow-hidden rounded-lg 
              border-2 bg-gradient-to-b from-[#C8A888] via-[#E5D4C0] to-[#F5E6D0] 
              shadow-[0_0_20px_#C8A888] relative"
            {...handlers}
          >
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Wedding Photography"
                className="absolute w-full h-full object-cover rounded-lg"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                loading="lazy"
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="flex flex-col order-2 items-start justify-center px-6 py-6 gap-5
          lg:order-1 sm:w-full sm:px-10 md:w-[110%] md:px-9 lg:-translate-x-2 lg:w-[50%]
          xl:w-[60%] 2xl:w-[50%]"
        >
          <motion.h1 className="text-3xl font-subheading text-[#5C3D2E] leading-tight sm:text-4xl md:text-6xl lg:mt-9">
            I'm here to{" "}
            <em className="italic font-subheading text-[#D4A373]">capture </em>{" "}
            your moments.
          </motion.h1>

          <motion.p className="text-[#5C3D2E] font-body text-xl max-w-md sm:mt-6 lg:mt-9">
            Elegant and artistic wedding photography that beautifully preserves
            your most precious moments.
          </motion.p>

          <motion.button
            onClick={() => {
              const gallerySection = document.querySelector("#gallery");
              if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-0 px-6 py-3 bg-[#D4A373] text-[#5C3D2E] font-semibold rounded-md lg:mt-3 
          transition-all duration-300 hover:bg-[#C8A888] hover:-translate-y-1 shadow-md"
            aria-label="View Gallery"
          >
            VIEW GALLERY
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E5D4C0] via-[#C8A888] to-[#D4A373] 
             shadow-[0_0_10px_#C8A888] rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HomePage;
