import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 flex flex-col lg:flex-row items-center 
    bg-gradient-to-r from-[#FAF3E0] via-[#E5D4C0] to-[#C8A888] text-[#5C3D2E] shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* /////////////////////////////////////////////////////////////////Left - Large Image */}
      <div className="w-full lg:w-1/2 relative flex justify-center">
        <motion.img
          src="/images/about1.jpg"
          alt="Photographer at work capturing moments"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.img
          src="/images/about2.jpg"
          alt="Portrait of photographer"
          className="absolute top-[60%] right-0 sm:w-1/3 w-[120px] sm:max-w-[140px] md:max-w-[160px] 
          rounded-lg shadow-md transform translate-x-1/4 -translate-y-1/4 border-4 border-[#C8A888]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        />
      </div>

      {/* ..\///////////////////////////////////////////////////////////////////////////////////Right - Content */}
      <div className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0 text-center lg:text-left">
        <motion.p
          className="text-xs sm:text-sm uppercase text-[#D4A373] tracking-widest"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Meet Kalai Arasan
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2 leading-snug text-[#5C3D2E]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          A <em className="italic text-[#D4A373]">documentary</em> wedding &
          family photographer
          <br className="hidden md:block" /> based in Madurai.
        </motion.h2>

        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-[#C8A888]">
            A LITTLE ABOUT ME
          </h3>
          <p className="mt-3 text-[#8C6F61] text-sm sm:text-base leading-relaxed">
            Every love story is unique, and as a wedding photographer, my
            passion is capturing those once-in-a-lifetime moments. From stolen
            glances to heartfelt vows, I focus on the emotions that make your
            day truly special. With an eye for detail and a love for
            storytelling, I aim to create images that feel natural, timeless,
            and full of life. Let’s turn your beautiful moments into memories
            that last forever!
          </p>
        </div>

        {/* /////////////////////////////////////////////////////////////////Contact Details */}
        <div className="mt-6 text-center lg:text-left">
          <p className="text-[#D4A373] font-semibold">INSTAGRAM:</p>
          <p className="text-[#8C6F61]">@studiopic.k</p>

          <p className="mt-3 text-[#D4A373] font-semibold">E-MAIL:</p>
          <p className="text-[#8C6F61]">Studio.pick@outlook.com</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
