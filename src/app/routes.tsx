// For GitHub Pages we use a hash-based router so we don't have to worry
// about the `/Shreonics` base path or server-side history fallback.  The
// hash router keeps all routing client-side and works instantly when the
// site is served from a subdirectory.
import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Research } from "./components/Research";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "research", Component: Research },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "why-choose-us", Component: WhyChooseUs },
      { path: "contact", Component: Contact },
    ],
  },
]);
