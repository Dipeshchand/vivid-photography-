import bg from "../../assets/images/p16.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div>
           <div className="fixed right-4  top-1/4  z-50 flex flex-col gap-4 mt-120">

        <a
          href="https://wa.me/918108569630"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={30} />
        </a>

        <a
          href="https://www.instagram.com/_aestheticmoments/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={30} />
        </a>

        <a
          href="tel:+918108569630"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaPhoneAlt size={30} />
        </a>
      </div>
      </div>
    </section>
  );
}
