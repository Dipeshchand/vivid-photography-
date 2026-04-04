import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/I1.jpg"
import img2 from "../assets/images/l2.jpg";
import img3 from "../assets/images/l3.jpg";
import img4 from "../assets/images/l4.jpg";
import img5 from "../assets/images/p7.jpg";
import img6 from "../assets/images/l6.jpg";
import img7 from "../assets/images/l7.jpg";
//
import img8 from "../assets/images/l8.jpg";
import img9 from "../assets/images/l9.jpg";
import img10 from "../assets/images/l10.jpg";
import img11 from "../assets/images/l11.jpg";
import img12 from "../assets/images/l12.jpg";
import img13 from "../assets/images/l13.jpg";
import img14 from "../assets/images/p18.jpg";

export default function IntroPage() {
  const navigate = useNavigate();

  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9,
    img10, img11, img12, img13, img14
  ];

  let imageIndex = 0;

  return (
    <div className="w-full h-screen ">
        {/* overflow-hidden */}
      <div
        className="
          grid
          grid-cols-3
          grid-rows-5
          md:grid-cols-5
          md:grid-rows-3
          w-full
          h-full
        "
      >
        {Array.from({ length: 15 }).map((_, i) => {
          // CENTER CELL (index 7)
          if (i === 7) {
            return (
              <div
                key={i}
                className="flex items-center justify-center bg-[#DCCDC2]"
              >
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl  mb-4" style={{fontFamily:"Seasons7"}}>
                    VSP
                  </h1>  
                  <button 
                    onClick={() => navigate("/home")}
                    className="px-6 py-2.5 bg-[#5A3F33] text-white rounded-full"
                  >
                    STEP IN
                  </button>
                </div>
              </div>
            );
          }

          const img = images[imageIndex++];

          return (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
