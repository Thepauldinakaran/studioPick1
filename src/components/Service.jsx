import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  // Text animation (Heading + Paragraph)
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Left Image Animation
  const leftImageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  // Right Image Animation
  const rightImageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
    },
  };

  // Right Paragraph Animation
  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.9 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#D4AF37] 
      text-white w-full h-full flex flex-col lg:flex-row items-center justify-center 
      p-6 sm:p-12 lg:p-24 gap-6 lg:gap-14 2xl:p-40 "
    >
      {/* Left Section - Text + Image (70%) */}
      <div className="w-full lg:w-[70%] h-auto lg:h-[700px] flex flex-col justify-between">
        {/* Text Content */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-subheading font-semibold text-[#FFFFFF]">
            What <em className="italic text-[#FFD700]">services</em> I provide?
          </h2>
          <p className="text-[#E5CFF7] text-base font-body sm:text-lg lg:text-2xl text-justify">
            I love shooting{" "}
            <em className="italic text-[#FFD700]">weddings & couples </em>
            since there are so many emotions to capture. Photography is my
            passion, and I love turning ideas into beautiful, timeless photos.
          </p>
        </motion.div>

        {/* Left Image with Animated Glowing Border */}
        <motion.div
          variants={leftImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mt-6 lg:mt-10"
        >
          <motion.div
            className="absolute inset-0 rounded-lg border-4 border-[#FFD700] animate-pulse"
            animate={{
              boxShadow: [
                "0px 0px 10px rgba(255, 215, 0, 0.4)",
                "0px 0px 20px rgba(255, 215, 0, 0.6)",
                "0px 0px 30px rgba(255, 215, 0, 0.8)",
                "0px 0px 20px rgba(255, 215, 0, 0.6)",
                "0px 0px 10px rgba(255, 215, 0, 0.4)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <img
            src="images/v1.jpg"
            alt="Service Example"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] 
            object-cover rounded-lg shadow-lg border-4 border-transparent"
          />
        </motion.div>
      </div>

      {/* Right Section - Image + Text (30%) */}
      <div className="w-full lg:w-[30%] lg:h-[700px] flex flex-col justify-between items-center">
        {/* Right Image */}
        <motion.div
          variants={rightImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full sm:w-full lg:w-full sm:h-[400px] lg:h-[500px] 2xl:h-[650px]"
        >
          <img
            src="images/ser2.png"
            alt="Couple Portrait"
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-[#F6C453]"
          />
        </motion.div>

        {/* Right Text Below Image */}
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#E5CFF7] text-base font-body sm:text-lg lg:text-xl 
          mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-6 text-justify"
        >
          I would like to give you a unique photography experience, designed to
          serve you best and capture your special moments for you and your
          families creatively and beautifully.
        </motion.p>
      </div>

      {/* Animated Bottom Border with Wavy Effect */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFD700] via-[#FFAA00] to-[#FFD700] 
                  shadow-[0_0_10px_#FFD700] rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Services;
