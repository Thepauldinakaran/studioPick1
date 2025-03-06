import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative bg-gradient-to-r from-[#FAF3E0] via-[#E5D4C0] to-[#C8A888] 
      text-[#5C3D2E] w-full h-full flex flex-col lg:flex-row items-center justify-center 
      p-6 sm:p-12 lg:p-24 gap-6 lg:gap-14 2xl:p-40"
    >
      {/* Left Section - Text + Image */}
      <div className="w-full lg:w-[70%] h-auto lg:h-[700px] flex flex-col justify-between">
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-subheading font-semibold text-[#8C5E3C]">
            What <em className="italic shining-text">services</em> I provide?
          </h2>
          <p className="text-[#5C3D2E] text-base font-body sm:text-lg lg:text-2xl text-justify">
            I love shooting{" "}
            <em className="italic text-[#D4A373]">weddings & couples</em> since
            there are so many emotions to capture. Photography is my passion,
            and I love turning ideas into beautiful, timeless photos.
          </p>
        </motion.div>

        {/* Left Image with Soft Glow Border */}
        <motion.div className="relative mt-6 lg:mt-10 group">
          <motion.div
            className="absolute inset-0 rounded-lg border-4 border-[#C8A888] animate-pulse"
            animate={{
              boxShadow: [
                "0px 0px 15px rgba(200, 168, 136, 0.5)",
                "0px 0px 25px rgba(200, 168, 136, 0.7)",
                "0px 0px 35px rgba(200, 168, 136, 0.9)",
                "0px 0px 25px rgba(200, 168, 136, 0.7)",
                "0px 0px 15px rgba(200, 168, 136, 0.5)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <img
            src="images/v1.jpg"
            alt="Service Example"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] 
            object-cover rounded-lg shadow-lg border-4 border-transparent 
            group-hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Right Section - Image + Text */}
      <div className="w-full lg:w-[30%] lg:h-[700px] flex flex-col justify-between items-center">
        {/* Right Image with Soft Glow */}
        <motion.div className="relative w-full sm:w-full lg:w-full sm:h-[400px] lg:h-[500px] 2xl:h-[650px] group">
          <motion.div
            className="absolute inset-0 rounded-lg border-4 border-[#D4A373] animate-pulse"
            animate={{
              boxShadow: [
                "0px 0px 15px rgba(212, 163, 115, 0.5)",
                "0px 0px 25px rgba(212, 163, 115, 0.7)",
                "0px 0px 35px rgba(212, 163, 115, 0.9)",
                "0px 0px 25px rgba(212, 163, 115, 0.7)",
                "0px 0px 15px rgba(212, 163, 115, 0.5)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <img
            src="images/ser2.png"
            alt="Couple Portrait"
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-transparent 
            group-hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Right Text Below Image */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-[#5C3D2E] text-base font-body sm:text-lg lg:text-xl 
          mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-6 text-justify"
        >
          I would like to give you a unique photography experience, designed to
          serve you best and capture your special moments for you and your
          families creatively and beautifully.
        </motion.p>
      </div>

      {/* Soft Gradient Bottom Border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E5D4C0] via-[#C8A888] to-[#D4A373] 
                  shadow-[0_0_10px_#C8A888] rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Services;
