// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import IntroPage from "./pages/IntroPage";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import TestimonialsGallery from "./pages/TestimonialGallery"
// import PortfolioUpload from "./pages/PortfolioUpload";


// const router = createBrowserRouter([
//   // 1️⃣ INTRO PAGE
//   {
//     path: "/",
//     element: <IntroPage />,
//   },

//   // 2️⃣ MAIN WEBSITE
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "home", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "portfolio", element: <Portfolio /> },
//       { path: "testimonials", element: <Testimonials /> },
//       {path: "testimonialsGallery", element: <TestimonialsGallery/>},
//       {path: "portfolios", element: <PortfolioUpload/>},
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

// export default router;


import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import TestimonialsGallery from "./pages/TestimonialGallery"; // ✅ fix name
import PortfolioUpload from "./pages/PortfolioUpload";

const router = createBrowserRouter([
  // ✅ Intro (NO Navbar/Footer)
  {
    path: "/",
    element: <IntroPage />,
  },

  // ✅ Main App (WITH Navbar/Footer)
  {
    path: "/",   // 🔥 IMPORTANT CHANGE
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "testimonialsGallery", element: <TestimonialsGallery /> },
      { path: "portfolioUpload", element: <PortfolioUpload /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <h1>404 Page Not Found</h1> },
    ],
  },
]);

export default router;