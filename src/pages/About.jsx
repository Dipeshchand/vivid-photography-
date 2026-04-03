// import cover1 from "../assets/images/cover1.png";
// export default function About() {
//   return (
//     <section className="w-full bg-[#F7F4ED]   py-20 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         {/* Image + Text (Side-by-Side on Desktop) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-10">
//           {/* Photographer / Studio Image */}
//           <div className="overflow-hidden rounded-3xl shadow-md">
//             <img
//               src="/images/main.jpeg"
//               alt="About WeFoundALoveStory"
//               className="w-full h-[400px] object-cover "
//             />
//           </div>

//           {/* About Content */}
//           <div className="text-left">
//             <p className="font-light">Hello there, I'm Rudahra</p>
//             <br />
//             <p className="text-gray-700 leading-relaxed text-lg mb-6 ">
//               A fine art luxury wedding photographer, with a love of telling
//               stories full of simplicity and emotion. Heavily influenced by the
//               glory of Indian culture and its people, I love to create stylised
//               wedding portraits & focus on the details of the day.
//             </p>

//             <p className="text-gray-700 leading-relaxed text-lg">
//               There are only few times in life that are bigger or more
//               meaningful than weddings. And we get to witness them. So, nothing
//               brings me more joy than witnessing love over and over again. My
//               only hope is one day your children or grandchildren discover your
//               wedding album and you pass on the story of your love and special
//               day through it.
//             </p>
//           </div>
//         </div>
//         <p
//           className="text-base md:text-lg lg:text-xl mt-10 font-serif italic"
//           style={{ fontFamily: "Baskervville, serif" }}
//         >
//           So I'm extremely delighted we found your love story!
//         </p>
//       </div>
//       <div className="mt-20">
//         <img src={cover1} />
//       </div>
//     </section>
//   );
// }


import React from "react";
// import founder from "../assets/image/founder.jpeg";

export default function About() {
  return (
    <div
      className="mt-34 md:mt-36 flex justify-center px-4 "
      style={{ fontFamily: "light" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-[32px] overflow-hidden w-full max-w-6xl min-h-[700px] shadow-xl bg-white">
        {/* IMAGE */}
        <div className="flex items-center justify-center  w-full h-[350px] md:h-full">
          <div
            className="relative 
                  w-60 h-60 
                  md:w-[520px] md:h-[520px] 
                  rounded-full 
                  overflow-hidden   
                  shadow-2xl 
                  ring-4 ring-white"
          >
            {/* <img
              src={founder}
              alt="Founder"
              className="w-full h-full object-cover"
            /> */}

            {/* subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* TEXT */}
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <h2
            style={{ fontFamily: "light1" }}
            className="text-xl md:text-2xl leading-snug"
          >
            Ankit Agrawal <br />
            <span className="text-base md:text-lg text-gray-600">
              Founder of Vividsnaps
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base">
            Vividsnaps was built on years of experience, passion, and a
            deep understanding of visual storytelling.
          </p>

          <p className="mt-4 text-sm md:text-base">
            The founder brings{" "}
            <span className="text-red-700 font-semibold">
              over 8 years of professional experience
            </span>{" "}
            in the photography and wedding film industry, having worked with{" "}
            <span className="text-red-700 font-semibold">
              multiple reputed production houses and creative companies.
            </span>
          </p>

          <p className="mt-4 text-sm md:text-base">
            During these years, he mastered every aspect of the craft — from
            capturing raw emotions on wedding days to understanding client
            expectations, team coordination, and premium production quality.
          </p>

          <p className="mt-4 text-sm md:text-base">
            After gaining extensive industry exposure, he took the next step and{" "}
            <span className="text-red-700 font-semibold">
              founded Aesthetic Moments,
            </span>{" "}
            which he has been leading{" "}
            <span className="underline underline-offset-4">
              successfully for the last 7 years.
            </span>
          </p>

          <p className="mt-5 text-sm md:text-base">
            What began as a personal vision has now grown into a well-structured
            creative company with a dedicated{" "}
            <span className="font-semibold">team of 35+ professionals.</span>
          </p>

          <p className="mt-4 text-sm md:text-base">
            They have delivered beautiful wedding experiences to{" "}
            <span className="text-red-700 font-semibold">
              110+ happy clients
            </span>
            , each story crafted with care, creativity, and precision.
          </p>

          <p className="mt-4 text-sm md:text-base">
            His leadership is rooted in one clear belief — every wedding is
            unique and deserves to be captured in a timeless, emotionally
            powerful way.
          </p>
        </div>
      </div>
    </div>
  );
}
