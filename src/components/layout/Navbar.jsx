import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full px-6 py-3 md:px-10 md:py-4 z-50
  bg-white/10 backdrop-blur-2xl border-b border-white/10
  flex items-center justify-between">

{/* absolute top-0 left-0 w-full px-6 py-3 md:px-10 md:py-4 z-50 
flex items-center justify-between
*/}
      {/* Logo */}
      <h1 className="text-4xl md:text-3xl font-[Cormorant_Garamond] tracking-wide" style={{fontFamily:""}}>
         Vividsnaps
      </h1>
      {/* font-serif font that changed */}
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-xl ">
        <Link to="/home" className="hover:opacity-70" style={{fontFamily:"Seasons1"}}>Home</Link>
        <Link to="/portfolio" className="hover:opacity-70" style={{fontFamily:"Seasons1"}}>Gallery</Link>
        <Link to="/portfolioUpload" className="hover:opacity-70" style={{fontFamily:"Seasons1"}}>Portfolio</Link>
        <Link to="/testimonialsGallery" className="hover:opacity-70" style={{fontFamily:"Seasons1"}}>Testimonials</Link>
        <Link to="/testimonials" className="hover:opacity-70" style={{fontFamily:"Seasons1"}}>Wedding Films</Link>
        <Link to="/contact" className="hover:opacity-70" style={{fontFamily:"Seasons1"}}>Contact Us</Link>
        <Link to="/about" className="hover:opacity-70" style={{fontFamily:"Seasons1"}}>About</Link>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-3xl font-bold"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      <div
  className={`absolute left-0 w-full bg-white/70 backdrop-blur-xl 
    md:hidden transition-all duration-500 ease-out overflow-hidden
    rounded-b-2xl border-b border-white/40
    ${menuOpen ? "max-h-40 opacity-100 top-15" : "max-h-0 opacity-0 top-12"}
  `}
>
  <ul className="flex flex-row flex-wrap justify-center font-[Cormorant_Garamond]   items-center gap-5 text-lg font-medium py-4 px-5">
    <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link to="/testimonialsGallery" onClick={()=>setMenuOpen(false)}>Testimonials</Link>
    <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Gallery</Link>
    <Link to="/portfolioUpload" onClick={()=>setMenuOpen(false)}>Portfolio</Link>
    <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Wedding Films</Link>
    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
  </ul>
</div>
    </nav>
  );
}
0