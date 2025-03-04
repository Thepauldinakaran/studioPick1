import { motion } from "framer-motion";
import React from "react";

const HomePage = () => {
  // Right-side parent div animation
  const rightParentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  // Image Animations
  const image1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const image2Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.6 },
    },
  };

  // Left-side text animation
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <motion.div
      id="home"
      className="flex w-full flex-col h-full p-8 gap-4 bg-[#ffffff]
     sm:p-10 md:-translate-x-8 md:p-14 lg:flex-row lg:-translate-x-2 lg:p-10 lg:pt-40
     xl:p-32 xl:pt-52 2xl:p-44"
    >
      {/* Right Section - Images */}
      <motion.div
        variants={rightParentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // ✅ Animates only once on scroll down
        className="flex gap-4 w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[580px] xl:h-[660px] 2xl:h-[650px] 
      bg-[linear-gradient(to_right,#FFFFFF_0%,#FFFFFF_20%,#F8F4F4_20%,#F8F4F4_100%)] 
      order-1 lg:order-2 items-center justify-center
      mt-20 sm:mt-24 md:mt-24 lg:mt-0 xl:mt-0 2xl:mt-0 2xl:gap-10"
      >
        {/* First Image */}
        <motion.div
          variants={image1Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-[80%] sm:w-[45%] md:w-[40%] h-[80%] flex justify-center items-center overflow-hidden"
        >
          <motion.img
            variants={image1Variants}
            src="images/H2.JPG"
            alt="h2"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          variants={image2Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="hidden sm:flex w-[80%] sm:w-[45%] md:w-[40%] h-[80%] justify-center items-center overflow-hidden"
        >
          <motion.img
            variants={image2Variants}
            src="images/H1.png"
            alt="h1"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Left Section - Text */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // ✅ Animates only once on scroll down
        className="flex flex-col order-2 items-start justify-center px-6 py-6 gap-5
        lg:order-1 sm:w-full sm:px-10 md:w-[110%] md:px-9 lg:-translate-x-2 lg:w-[50%]
        xl:w-[60%] 2xl:w-[50%]"
      >
        {/* Animated Heading */}
        <motion.h1
          variants={textVariants}
          className="text-3xl font-serif text-gray-800 leading-tight sm:text-4xl md:text-5xl lg:mt-9"
        >
          I'm here to <em className="italic font-semibold">capture</em> your
          moments.
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          variants={textVariants}
          className="text-gray-600 text-lg mt-4 max-w-md sm:mt-6 lg:mt-9"
        >
          I would like to give you a unique photography experience & capture
          your special moments for you.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, x: -80 }, // Start hidden
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeOut" }, // ⏳ Faster transition
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }} // 🟢 Triggers earlier for smoothness
          id="gallery-btn"
          onClick={() => {
            const gallerySection = document.querySelector("#gallery");
            if (gallerySection) {
              gallerySection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-6 px-6 py-3 bg-[#c4a5a5] text-white font-semibold rounded-md lg:mt-9 
    transition-all duration-300 hover:bg-[#b08f8f] hover:-translate-y-1"
        >
          SEE MY WORKS
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
