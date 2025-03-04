import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white w-full py-24 border-t border-gray-200"
    >
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-40 2xl:px-64">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Section - Socials */}
          <div className="space-y-3 justify-self-start">
            <a
              href="https://www.instagram.com/juliablumephotography"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-all"
            >
              <FaInstagram size={24} />
              <span className="font-semibold text-lg">INSTAGRAM</span>
            </a>
            <p className="text-gray-500">juliablumephotography</p>

            <a
              href="https://www.facebook.com/juliablumephotography"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all"
            >
              <FaFacebook size={24} />
              <span className="font-semibold text-lg">FACEBOOK</span>
            </a>
            <p className="text-gray-500">juliablumephotography</p>
          </div>

          {/* Center Section - Branding */}
          <div className="flex flex-col items-center space-y-3 border-gray-300 md:border-x px-6">
            <h2 className="text-2xl font-serif font-bold tracking-wider">
              BLUME
            </h2>
            <p className="italic text-gray-600 text-lg">photography</p>
            <p className="text-gray-500 text-center text-sm max-w-xs">
              I would like to give you a unique photography experience and
              capture your special moments.
            </p>
          </div>

          {/* Right Section - Contact (Moved to the correct position) */}
          <div className="space-y-3 justify-self-end">
            <a
              href="https://wa.me/882185746574"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-green-500 transition-all"
            >
              <FaWhatsapp size={24} />
              <span className="font-semibold text-lg">WHATSAPP</span>
            </a>
            <p className="text-gray-500">+88 218 574 65 74</p>

            <a
              href="mailto:info@juliablume.com"
              className="flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-all"
            >
              <FaEnvelope size={24} />
              <span className="font-semibold text-lg">E-MAIL</span>
            </a>
            <p className="text-gray-500">info@juliablume.com</p>
          </div>
        </div>

        {/* Centered Copyright Text */}
        <p className="text-center justify-center text-gray-500 text-sm mt-8">
          &copy; Blume by elemis. Licensing. Powered by Webflow.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
