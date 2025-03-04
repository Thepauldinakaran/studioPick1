import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const couples = [
  {
    name: "Couple1 & Couple1",
    location: "LAKELAND",
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
    location: "IRVINGTON",
    category: "ENGAGEMENT",
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
    location: "IRVINGTON",
    category: "ENGAGEMENT",
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
    location: "IRVINGTON",
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
    location: "IRVINGTON",
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
    <div
      id="gallery"
      className="flex flex-col items-center justify-start w-full min-h-screen bg-white px-6 py-20 lg:px-12 gap-8 2xl:p-32"
    >
      <div className="w-full flex justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-semibold text-center mb-8">
          Some of the wonderful <em className="italic">love stories</em> I
          witnessed and had the chance to capture
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-8">
        <div className="w-full lg:w-[60%] p-3">
          <div className="space-y-6">
            {couples.map((couple, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-300 p-3 space-y-2"
                onMouseEnter={() => setSelectedImage(couple.image)}
                onClick={() => setSelectedCouple(couple)}
              >
                <h3 className="text-3xl md:text-4xl xl:text-5xl font-serif text-gray-900 group-hover:text-[#cfb7b7] mb-2">
                  {couple.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base group-hover:text-[#cfb7b7] leading-relaxed">
                  {couple.location} —{" "}
                  <span className="text-pink-500">{couple.category}</span>
                </p>
                <div className="border-[0.5px] border-[#cfb7b7] w-full mt-4"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden xl:flex w-[40%] lg:w-1/2 justify-center">
          <div className="border-8 border-[#cfb7b7] p-4">
            <img
              src={selectedImage}
              alt="Couple"
              className="w-[450px] h-full object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCouple && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-start bg-[#F8F4F4]/90 z-50 p-6 md:p-10 backdrop-blur-md overflow-y-auto w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={() => setSelectedCouple(null)}
              className="absolute top-6 right-6 text-gray-700 hover:text-black text-4xl"
            >
              &times;
            </button>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-serif font-semibold text-gray-900 mb-6">
              {selectedCouple.name}'s Gallery
            </h2>
            <div className="columns-3 md:columns-3 gap-2 w-full max-w-6xl space-y-2">
              {selectedCouple.gallery.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt="Gallery"
                  className="w-full h-auto object-cover shadow-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setLightboxImage(img)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* //////////////////////////////////////////////////////////////////////////////////////// */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white text-4xl"
            >
              &times;
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white text-4xl"
            >
              &#8249;
            </button>
            <img
              src={lightboxImage}
              className="max-w-[90%] max-h-[80vh] object-contain rounded-lg"
              alt="Lightbox"
            />
            <button
              onClick={handleNext}
              className="absolute right-6 text-white text-4xl"
            >
              &#8250;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveStories;
