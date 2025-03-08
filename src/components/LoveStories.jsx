import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const couples = [
  {
    name: "Couple1 & Couple1",
    location: "MADURAI",
    category: "WEDDING",
    image: "images/c1.jpg",
    gallery: [
      "images/g1.jpg",
      "images/g2.jpg",
      "images/g3.jpg",
      "images/g4.jpg",
      "images/g5.jpg",
      "images/g6.jpg",
      "images/g7.jpg",
      "images/g8.jpg",
      "images/g9.jpg",
    ],
  },
  {
    name: "Couple2 & Couple2",
    location: "MADURAI",
    category: "OUTDOOR",
    image: "images/c2.jpg",
    gallery: [
      "images/b1.jpg",
      "images/b2.jpg",
      "images/b3.jpg",
      "images/b4.jpg",
      "images/b5.jpg",
      "images/b6.jpg",
      "images/b7.jpg",
      "images/b8.jpg",
      "images/b9.jpg",
      "images/b10.jpg",
    ],
  },
  {
    name: "Couple3 & Couple3",
    location: "MADURAI",
    category: "OUTDOOR",
    image: "images/c3.jpg",
    gallery: [
      "images/a1.jpg",
      "images/a2.jpg",
      "images/a3.jpg",
      "images/a4.jpg",
      "images/a5.jpg",
      "images/a6.jpg",
      "images/a7.jpg",
      "images/a8.jpg",
      "images/a9.jpg",
      "images/a10.jpg",
      "images/a11.jpg",
      "images/a12.jpg",
    ],
  },
  {
    name: "Couple4 & Couple4",
    location: "MADURAI",
    category: "ENGAGEMENT",
    image: "images/c4.jpg",
    gallery: [
      "images/d1.jpg",
      "images/d2.jpg",
      "images/d3.jpg",
      "images/d4.jpg",
      "images/d5.jpg",
      "images/d6.jpg",
      "images/d7.jpg",
      "images/d8.jpg",
      "images/d9.jpg",
      "images/d10.jpg",
      "images/d11.jpg",
    ],
  },
  {
    name: "Couple5 & Couple5",
    location: "MADURAI",
    category: "ENGAGEMENT",
    image: "images/c5.jpg",
    gallery: [
      "images/e1.jpg",
      "images/e2.jpg",
      "images/e3.jpg",
      "images/e4.jpg",
      "images/e5.jpg",
      "images/e6.jpg",
      "images/e7.jpg",
      "images/e8.jpg",
      "images/e9.jpg",
      "images/e10.jpg",
    ],
  },
  {
    name: "Couple6 & Couple6",
    location: "MADURAI",
    category: "ENGAGEMENT",
    image: "images/v4.jpg",
    gallery: [
      "images/v1.jpg",
      "images/v2.jpg",
      "images/v3.jpg",
      "images/v4.jpg",
      "images/v6.jpg",
      "images/v7.jpg",
      "images/v8.jpg",
      "images/v9.jpg",
      "images/v10.jpg",
      "images/v11.jpg",
    ],
  },
];

const LoveStories = () => {
  const [selectedImage, setSelectedImage] = useState(couples[0].image);
  const [selectedCouple, setSelectedCouple] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow =
      selectedCouple || lightboxImage ? "hidden" : "auto";
  }, [selectedCouple, lightboxImage]);

  const handleNext = () => {
    if (selectedCouple && lightboxImage) {
      const currentIndex = selectedCouple.gallery.indexOf(lightboxImage);
      if (currentIndex < selectedCouple.gallery.length - 1) {
        setLightboxImage(selectedCouple.gallery[currentIndex + 1]);
      }
    }
  };

  const handlePrev = () => {
    if (selectedCouple && lightboxImage) {
      const currentIndex = selectedCouple.gallery.indexOf(lightboxImage);
      if (currentIndex > 0) {
        setLightboxImage(selectedCouple.gallery[currentIndex - 1]);
      }
    }
  };

  return (
    <motion.div
      id="gallery"
      className="flex max-w-[100vw]  overflow-x:hidden flex-col items-center justify-start min-h-screen 
        bg-gradient-to-r from-[#FAF3E0] via-[#E5D4C0] to-[#C8A888] text-[#5C3D2E] 
        px-6 py-20 lg:px-12 gap-8 2xl:p-32 relative"
    >
      {/* ///////////////////////////Title Animation (Appears when scrolling) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} /////////////////////////////////// Animation triggers only when in viewport
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        className="w-full flex justify-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-heading font-semibold text-center mb-8">
          Some of the wonderful{" "}
          <em className="italic text-[#D4A373]">love stories</em> I witnessed
          and had the chance to capture
        </h2>
      </motion.div>

      {/*/////////////////////////////////// Couple List Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} //////////////////Runs only once when scrolling down
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        className="flex flex-col lg:flex-row items-start justify-center w-full gap-8"
      >
        <div className="w-full lg:w-[60%] p-3">
          <div className="space-y-6">
            {couples.map((couple, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer transition-all duration-300 p-3 space-y-2"
                onMouseEnter={() => setSelectedImage(couple.image)}
                onClick={() => setSelectedCouple(couple)}
              >
                {/* Heading with Hover Effect */}
                <motion.h3
                  whileHover={{ color: "#D4A373" }}
                  className="text-3xl md:text-4xl xl:text-5xl font-subheading text-[#5C3D2E] mb-2"
                >
                  {couple.name}
                </motion.h3>
                <p className="text-[#8C6F61] text-sm md:text-base group-hover:text-[#C8A888] leading-relaxed">
                  {couple.location} —{" "}
                  <span className="text-[#D4A373]">{couple.category}</span>
                </p>
                <div className="border-[0.5px] border-[#C8A888] w-full mt-4"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Image Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden xl:flex w-[40%] lg:w-1/2 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border-8 border-[#D4A373] p-4 shadow-lg rounded-lg"
          >
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Couple"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[450px] h-full object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ///////////////////////////////////////////////Bottom Line Animation */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E5D4C0] via-[#C8A888] to-[#D4A373] 
               shadow-[0_0_10px_#C8A888] rounded-full"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      <AnimatePresence>
        {selectedCouple && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
            className="fixed inset-0 flex flex-col items-center justify-start bg-[#5C3D2E]/90 z-50 p-6 md:p-10 
            backdrop-blur-md overflow-y-auto w-full"
          >
            <button
              onClick={() => setSelectedCouple(null)}
              className="absolute top-4 right-6 sm:top-6 sm:right-6 text-[#D4A373] hover:text-[#8C5E3C] 
        text-3xl sm:text-4xl  sm:mt-0"
            >
              &times;
            </button>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-heading font-semibold text-[#D4A373] mt-10">
              {selectedCouple.name}'s Gallery
            </h2>
            <div className="columns-3 mt-6 md:columns-3 gap-2 w-full max-w-6xl space-y-2">
              {selectedCouple.gallery.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt="Gallery"
                  className="w-full h-auto object-cover shadow-md cursor-pointer border-4 border-[#C8A888]"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setLightboxImage(img)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#3D2C2E]/90 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-[#D4A373] text-4xl"
            >
              &times;
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-6 text-[#D4A373] text-4xl"
            >
              &#8249;
            </button>
            <img
              src={lightboxImage}
              className="max-w-[90%] max-h-[80vh] object-contain rounded-lg border-4 border-[#C8A888]"
              alt="Lightbox"
            />
            <button
              onClick={handleNext}
              className="absolute right-6 text-[#D4A373] text-4xl"
            >
              &#8250;{" "}
              {/* X- icon   //////////////////////////////////////////////////////////////////////////////////// */}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoveStories;
