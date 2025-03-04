import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  // Text animation (Heading + Paragraph)
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.9 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // ✅ Triggers only once per page load
      className="relative bg-[#f8f4f4] w-full h-full flex flex-col lg:flex-row items-center justify-center 
      p-6 sm:p-12 lg:p-24 gap-6 lg:gap-14 2xl:p-40"
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
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-semibold">
            What <em className="italic">services</em> I provide?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-2xl text-justify">
            I love shooting <em className="italic">weddings & couples</em> since
            there are so many feelings to capture. Photography is my passion & I
            love turning ideas into beautiful photos.
          </p>
        </motion.div>

        {/* Image Below Text */}
        <motion.div
          variants={leftImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-6 lg:mt-10"
        >
          <img
            src="images/ser1.png"
            alt="Service Example"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] object-cover rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      {/* Right Section - Image + Text (30%) */}
      <div className="w-full lg:w-[30%] lg:h-[700px] flex flex-col justify-between items-center">
        {/* Image First */}
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
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* Text Below Image */}
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-600 text-base sm:text-lg lg:text-xl 
          mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-6 text-justify"
        >
          I would like to give you a unique photography experience, built to
          serve you best and capture your special moments for you and your
          families creatively and beautifully.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Services;
