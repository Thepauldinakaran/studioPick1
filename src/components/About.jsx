import React from "react";

const About = () => {
  return (
    <section className="container mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center">
      {/* Left - Large Image */}
      <div className="lg:w-1/2 relative">
        <img
          src="/images/about1.jpg"
          alt="Photographer"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <img
          src="/images/about2.jpg"
          alt="Photographer Portrait"
          className="absolute top-[60%] right-0 w-1/3 rounded-lg shadow-md transform translate-x-1/4 -translate-y-1/4 lg:w-1/4"
        />
      </div>

      {/* Right - Content */}
      <div className="lg:w-1/2 lg:pl-16 mt-10 lg:mt-0">
        <p className="text-sm uppercase text-gray-400 tracking-widest">
          Meet Julia Blume
        </p>
        <h2 className="text-4xl font-serif font-bold mt-2 leading-tight">
          A <em className="italic">documentary</em> wedding & family
          photographer
          <br /> based in New York.
        </h2>

        <div className="mt-8">
          <h3 className="text-lg font-bold">A LITTLE ABOUT ME</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Maecenas amet ultricies fames arcu tincidunt aliquet vitae dolor
            eros tristique ullamcorper venenatis ornare id eu odio. Elit eget
            risus varius adipiscing volutpat nisl amet facilisis ligula porta
            euismod semper consectetur.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mt-6">
          <p className="text-gray-800 font-semibold">INSTAGRAM:</p>
          <p className="text-gray-600">@juliablumephotography</p>

          <p className="mt-3 text-gray-800 font-semibold">E-MAIL:</p>
          <p className="text-gray-600">info@juliablume.com</p>
        </div>
      </div>
    </section>
  );
};

export default About;
