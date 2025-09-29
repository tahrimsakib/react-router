import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./cpmponent/root/Root.jsx";
import Home from "./cpmponent/Home/Home.jsx";
import Mobiles from "./cpmponent/Mobiles/Mobiles.jsx";
import Laptops from "./cpmponent/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Mobiles", Component: Mobiles },
      { path: "Laptops", Component: Laptops },
    ],
  },
  {
    path: "home",
    element: <div>its home</div>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "me",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
