import "./index.css";
import Main from "./Routes/Main";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Banner from "./Page/HomePage/Banner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
