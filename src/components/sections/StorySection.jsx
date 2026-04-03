import img1 from "../../assets/images/p20.jpg";
import img2 from "../../assets/images/p21.jpg";

export default function StorySection() {
  return (
    <section className="w-full bg-[#F6F3EC] px-6 py-16 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

{/* -------------------------------------------- */}
        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl  italic mb-6" style={{fontFamily:"font1"}}>
            The Art of Remembring
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-4  text-[#4B463E]s" style={{fontFamily:""}}>
            A wedding is more than an occasion - it an experience shaped by elegance, emotion, and timeless beauty.
            Every detail, from delicate textures to fleeting expressions, deserves to be preserved with purpose and artistry
          </p>

          <p className="text-base md:text-lg leading-relaxed text-[#4B463E]">
            At Vivid Snaps, we capture with intentin, Beyond documentation, we craft refined visual narratives that feel immersive and enduring. Through a careful balance of light, composition, and authenticity, we create imagery that rises above trends
            and embodies true spohistication.Each frame is designed not only to show your day - but to preserve how it felt, in its most elevated form
          </p>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex justify-center md:justify-end">    
          {/* BACK IMAGE */}
          <img
            src={img1}
            className="w-[250px] md:w-[400px] lg:w-[450px]  translate-x-16  rounded-lg shadow-lg opacity-90"
          />

          {/* FRONT IMAGE */}
          <img
            src={img2}
            className="w-[170px] md:w-[260px] lg:w-[320px] rounded-lg shadow-xl absolute top-10 left-8 md:top-20 md:left-10"
          />
        </div>
      </div>
    </section>
  );
}
