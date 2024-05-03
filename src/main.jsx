import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Buy from "./Components/Buy/Buy";
import Sell from "./Components/Sell/Sell";
import Services from "./Components/Services/Services";
import ManageRentals from "./Components/ManageRentals/ManageRentals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/page2",
        element: <Buy></Buy>,
      },
      {
        path: "/page3",
        element: <Sell></Sell>,
      },
      {
        path: "/page4",
        element: <Services></Services>,
      },
      {
        path: "/page5",
        element: <ManageRentals></ManageRentals>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
