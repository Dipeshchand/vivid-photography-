import React from "react";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

import img1 from "../assets/images/p1.jpg";
import img2 from "../assets/images/p2.jpg";
import img3 from "../assets/images/p3.jpg";
import img4 from "../assets/images/p4.jpg";
import img5 from "../assets/images/p5.jpg";
// import img6 from "../assets/images/p6.jpg";
import img7 from "../assets/images/p7.jpg";
import img9 from "../assets/images/p9.jpg";
import img10 from "../assets/images/p10.jpg";
import img11 from "../assets/images/p11.jpg";
import img12 from "../assets/images/p12.jpg";
import img13 from "../assets/images/p13.jpg";
import img14 from "../assets/images/p14.jpg";
//homepage Images + video
import g4 from "../assets/images/p15.jpg";
import g2 from "../assets/images/p16.jpg";
import g16 from "../assets/images/p17.jpg";
import g7 from "../assets/images/p18.jpg";
import g18 from "../assets/images/p19.jpg";
import g19 from "../assets/images/p20.jpg";
import g20 from "../assets/images/p21.jpg";
import g21 from "../assets/images/p22.jpg";
import g22 from "../assets/images/p23.jpg";
import g23 from "../assets/images/p24.jpg";
import g24 from "../assets/images/p25.jpg";
import g25 from "../assets/images/p26.jpg";
const images = [
  img1, img2, img3,img4,img5,img7,img9,img10,img11,img12,
  img13,img14,g4,g2,g7,g16,g18,g19,g20,g21,g22,g23,g24,g25
];

export default function Portfolio() {
  return (
    <div className="mt-32 ">
      <div className="fixed right-4  top-1/4  z-50 flex flex-col gap-4 mt-60">
        <a
          href="https://wa.me/919908850542"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="https://www.instagram.com/vividsnaps_1096/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="tel:+919908850542"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <span className="relative text-3xl font-semibold" style={{ fontFamily: "Session2" }}>
          Our Gallery
          <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r  to-red-400"></span>
        </span>
      </div>
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 [column-gap:0px] ">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden ">
            <img
              src={img}
              alt="Gallery"
              className="w-full object-cover  hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
