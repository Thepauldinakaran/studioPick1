import { motion } from "framer-motion";
import React from "react";

const HomePage = () => {
  const rightParentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div className="relative w-full min-h-screen pb-0 mb-0 overflow-hidden">
      <motion.div
        id="home"
        className="flex w-full min-h-screen flex-col h-full p-8 gap-4 
      bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#D4AF37] 
      bg-cover bg-no-repeat shadow-[0px_0px_30px_5px_rgba(212,175,55,0.3)]
      sm:p-10 md:p-14 lg:flex-row lg:p-10 lg:pt-40 xl:p-32 xl:pt-52 2xl:p-44"
      >
        {/* Image Section */}
        <motion.div
          variants={rightParentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex gap-4 w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[580px] xl:h-[660px] 2xl:h-[650px] 
        bg-[#E5CFF7] bg-opacity-90 rounded-lg 
        order-1 lg:order-2 items-center justify-center
        mt-20 sm:mt-24 md:mt-24 lg:mt-0 xl:mt-0 2xl:mt-0 2xl:gap-10"
        >
          {/* Image 1 with Soft Blended Border */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="w-[80%] sm:w-[45%] md:w-[40%] h-[80%] flex justify-center items-center overflow-hidden rounded-lg 
            border-2 bg-gradient-to-b from-[#4A148C] via-[#6A1B9A] to-[#E5CFF7] 
            shadow-[0_0_20px_#6A1B9A]"
          >
            <motion.img
              variants={imageVariants}
              src="images/H2.JPG"
              alt="Wedding Photography"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Image 2 with Soft Blended Border */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="hidden sm:flex w-[80%] sm:w-[45%] md:w-[40%] h-[80%] justify-center items-center overflow-hidden rounded-lg 
            border-2 bg-gradient-to-b from-[#4A148C] via-[#6A1B9A] to-[#E5CFF7] 
            shadow-[0_0_20px_#6A1B9A]"
          >
            <motion.img
              variants={imageVariants}
              src="images/H1.png"
              alt="Wedding Moment"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col order-2 items-start justify-center px-6 py-6 gap-5
          lg:order-1 sm:w-full sm:px-10 md:w-[110%] md:px-9 lg:-translate-x-2 lg:w-[50%]
          xl:w-[60%] 2xl:w-[50%]"
        >
          <motion.h1
            variants={textVariants}
            className="text-3xl font-subheading text-[#FFFFFF] leading-tight sm:text-4xl md:text-6xl lg:mt-9"
          >
            I'm here to{" "}
            <em className="italic font-subheading text-[#FFD700]">capture </em>
            your moments.
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-[#FFFFFF] font-body text-xl max-w-md sm:mt-6 lg:mt-9"
          >
            Elegant and artistic wedding photography that beautifully preserves
            your most precious moments.
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: -70 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "linear" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            id="gallery-btn"
            onClick={() => {
              const gallerySection = document.querySelector("#gallery");
              if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-0 px-6 py-3 bg-[#FF9EAA] text-[#4A148C] font-semibold rounded-md lg:mt-3 
          transition-all duration-300 hover:bg-[#7D5A50] hover:-translate-y-1 shadow-md"
          >
            VIEW GALLERY
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFD700] via-[#FFAA00] to-[#FFD700]
             shadow-[0_0_10px_#6A1B9A] rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HomePage;
