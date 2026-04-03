import React from "react";
import img1 from "../../assets/images/new1.jpg";
import img2 from "../../assets/images/new2.jpg";
import img3 from "../../assets/images/new3.jpg";


export default function CapturedMoments() {
  const couples = [
    { 
      id: 1, 
      name: "Prabhu & Swapna", 
      desc: "Two souls, one journey bound by love, defined by moments.",
      image: img1  
    },
    { 
      id: 2, 
      name: "Hemanth & Sushmitha", 
      desc: "A story of effortless love, where every moment feels meant to be.",
      image: img2 
    },
    { 
      id: 3, 
      name: "Shubhi & Jay", 
      desc: "A quiet bond that speaks through every shared galnce.",
      image: img3
    },
  ];

  return (
    <section className="w-full bg-[#F6F3EC] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-baskervville  mb-4" style={{fontFamily:"font5"}}>
          Captured Moments
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 font-baskervville ">
          Click on each couple to watch their love story unfold.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {couples.map((c) => (
            <div key={c.id} className="cursor-pointer">
              
              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-2xl font-serif ">
                {c.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                {c.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
