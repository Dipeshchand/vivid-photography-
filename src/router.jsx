
// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import ProtectedRoute from "./components/common/ProtectedRoute";
// import IntroPage from "./pages/IntroPage";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Album from "./pages/Album"; // ✅ ADD THIS
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import TestimonialsGallery from "./pages/TestimonialGallery";
// import PortfolioUpload from "./pages/PortfolioUpload";
// import Admin from "./pages/Admin";
// import Login from "./pages/Login";
// const Blog = lazy(() => import("./pages/Blog"));
// const BlogDetails = lazy(() => import("./pages/BlogDetails"));
// const AdminBlog = lazy(() => import("./pages/AdminBlog"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <IntroPage />,
//   },

//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "home", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "portfolio", element: <Portfolio /> },

//       // 🔥 FIX HERE
//       { path: "portfolio/:slug", element: <Album /> },

//       { path: "testimonials", element: <Testimonials /> },
//       { path: "testimonialsGallery", element: <TestimonialsGallery /> },
//       { path: "portfolioUpload", element: <PortfolioUpload /> },
//       { path: "contact", element: <Contact /> },
//       { path: "*", element: <h1>404 Page Not Found</h1> },
//       { path: "blogs", element: <Blog /> },
//       { path: "blogs/:slug", element: <BlogDetails /> }
//     ],
//   },
//    {
//   element: <ProtectedRoute />,
//   children: [
//     {
//       path: "/admin",
//       element: (
//         <Suspense fallback={<Loader />}>
//           <Admin />
//         </Suspense>
//       ),
//     },
//     {
//       path: "/admin/blog",
//       element: (
//         <Suspense fallback={<Loader />}>
//           <AdminBlog />
//         </Suspense>
//       ),
//     },
//   ],
// },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/admin",
//     element: <Admin />,
//   },
// ]);

// export default router;

import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ProtectedRoute from "./components/common/ProtectedRoute";
// import Loader from "./components/common/Loader";

const Loader = () => (
  <div className="h-screen flex items-center justify-center">
    Loading...
  </div>
);

import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Album from "./pages/Album";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import TestimonialsGallery from "./pages/TestimonialGallery";
import PortfolioUpload from "./pages/PortfolioUpload";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

// Lazy Loaded Pages
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio/:slug",
        element: <Album />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "testimonialsGallery",
        element: <TestimonialsGallery />,
      },
      {
        path: "portfolioUpload",
        element: <PortfolioUpload />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "blogs/:slug",
        element: (
          <Suspense fallback={<Loader />}>
            <BlogDetails />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <h1>404 Page Not Found</h1>,
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/admin",
        element: (
          <Suspense fallback={<Loader />}>
            <Admin />
          </Suspense>
        ),
      },
      {
        path: "/admin/blog",
        element: (
          <Suspense fallback={<Loader />}>
            <AdminBlog />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;