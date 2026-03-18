// For GitHub Pages we use a hash-based router so we don't have to worry
// about the `/Shreonics` base path or server-side history fallback.  The
// hash router keeps all routing client-side and works instantly when the
// site is served from a subdirectory.
import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "./components/Layout";

// Lazy load components for better performance
const Home = lazy(() => import("./components/Home").then((module) => ({ default: module.Home })));
const Products = lazy(() => import("./components/Products").then((module) => ({ default: module.Products })));
const Research = lazy(() => import("./components/Research").then((module) => ({ default: module.Research })));
const Services = lazy(() => import("./components/Services").then((module) => ({ default: module.Services })));
const About = lazy(() => import("./components/About").then((module) => ({ default: module.About })));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs").then((module) => ({ default: module.WhyChooseUs })));
const Contact = lazy(() => import("./components/Contact").then((module) => ({ default: module.Contact })));


export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00a859]"></div></div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00a859]"></div></div>}>
            <Products />
          </Suspense>
        )
      },
      {
        path: "research",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00a859]"></div></div>}>
            <Research />
          </Suspense>
        )
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00a859]"></div></div>}>
            <Services />
          </Suspense>
        )
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00a859]"></div></div>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "why-choose-us",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00a859]"></div></div>}>
            <WhyChooseUs />
          </Suspense>
        )
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00a859]"></div></div>}>
            <Contact />
          </Suspense>
        )
      },
    ],
  },
]);
