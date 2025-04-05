import "./index.css";
import Main from "./Routes/Main";
import { StrictMode } from "react";
import Event from "./Page/EventPage/Event";
import Banner from "./Page/HomePage/Banner";
import { createRoot } from "react-dom/client";
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
      {
        path: "/event",
        element: <Event></Event>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
