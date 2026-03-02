import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Research } from "./components/Research";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter(
  [
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
  ],
  { basename: "/Shreonics" }
);
